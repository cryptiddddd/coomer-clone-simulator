/**
 * main script -- manages base behavior and gathers html elements from document.
 */

import { Clone } from "./scripts/clone.js";
import * as audio from "./scripts/audio.js";
import { detectCollisions } from "./scripts/collisions.js";

// gather elements :]
const CONTAINER = document.getElementById("container") as HTMLDivElement;
const SPAWN_BTN = document.getElementById("spawn") as HTMLButtonElement;
const KILL_BTN = document.getElementById("kill") as HTMLButtonElement;

const STAT_TOTAL = document.getElementById("stat-total") as HTMLSpanElement;
const STAT_ALIVE = document.getElementById("stat-alive") as HTMLSpanElement;
const STAT_DEAD = document.getElementById("stat-dead") as HTMLSpanElement;

// init vars
let clones: Set<Clone> = new Set();

let total = 0;
let dead = 0;
let alive = 0;


// animation runs on update
function onUpdate() {
    for (let clone of clones) {
        clone.update();

        // check for life.
        if (clone.isDead) {
            dead++;
            alive--;

            clones.delete(clone);
        }
    }

    // die
    detectCollisions(clones);

    // update stats <3
    STAT_TOTAL.innerText = "" + total;
    STAT_ALIVE.innerText = "" + alive;
    STAT_DEAD.innerText = "" + dead;

    requestAnimationFrame(onUpdate)
}

// spawn routine.
SPAWN_BTN.addEventListener("click", () => {
    const newCoomer = new Clone();

    // counters
    total ++;
    alive ++;

    // create
    audio.onSpawn();
    newCoomer.spawn(CONTAINER);
    clones.add(newCoomer);

});

// experimental kill button
KILL_BTN.addEventListener("click", () => {
    if (clones.size == 0) throw {error: true, message: "THERE'S NOTHING OUT THEEEREEEEE"};

    // kill a random clone.
    Array.from(clones)[Math.floor(Math.random() * clones.size)].die();
});

// begin animation teehee
onUpdate();

