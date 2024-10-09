/**
 * main script -- manages base behavior and gathers html elements from document.
 */

import { Clone } from "./scripts/clone";
import * as audio from "./scripts/audio";
import config from "./scripts/config";
import { detectCollisions } from "./scripts/collisions";
import { COOMER_ALTS, COOMER_SPRITES, EXPLOSION_GIF, SECRET_COOMER_ALTS, SECRET_COOMER_SPRITES } from "./scripts/assets";

import { preloadImg } from "./scripts/setup";

// setup
preloadImg(
    ...COOMER_SPRITES,
    ...SECRET_COOMER_SPRITES,
    EXPLOSION_GIF
);

console.info("all preloaded assets are preloaded for a reason heart emoji");

// gather elements :]
const CONTAINER = document.getElementById("container") as HTMLDivElement;

const SPAWN_BTN = document.getElementById("spawn") as HTMLButtonElement;
const KILL_BTN = document.getElementById("kill") as HTMLButtonElement;
const VOL_SLIDER = document.getElementById("volume-slider") as HTMLInputElement;

const STAT_TOTAL = document.getElementById("stat-total") as HTMLSpanElement;
const STAT_ALIVE = document.getElementById("stat-alive") as HTMLSpanElement;
const STAT_DEAD = document.getElementById("stat-dead") as HTMLSpanElement;

// init vars
let clones: Set<Clone> = new Set();

let total = 0;
let dead = 0;
let alive = 0;

// flags
let hasAddedSecret = false;


// volume setup
VOL_SLIDER.value = "" + config.BASE_VOL;

VOL_SLIDER.addEventListener("change", () => {
    config.BASE_VOL = Number(VOL_SLIDER.value);
});


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

    if (!hasAddedSecret && total > 200) {
        COOMER_SPRITES.push(...SECRET_COOMER_SPRITES);
        COOMER_ALTS.push(...SECRET_COOMER_ALTS);
        hasAddedSecret = true;
    }

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

