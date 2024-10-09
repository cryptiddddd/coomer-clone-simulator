/**
 * contains code for all clone behavior.
 */

import { COOMER_ALTS, COOMER_SPRITES } from "./assets";
import config from "./config";

import * as audio from "./audio";
import { Explosion } from "./explosion";


function generateVelocity(): number {
    // TOO LAZY TO FIGURE OUT AN ELEGANT EQUATION AUGUHH
    const polarity = Math.round(Math.random())? 1: -1;
    return Math.random() * (config.MAX_VEL - config.MIN_VEL) + config.MIN_VEL * polarity;
}


/**
 * class manages behavior of the clone elements.
 */
export class Clone {
    var: number;
    element: HTMLElement;
    counter: HTMLSpanElement;
    parent?: HTMLDivElement;

    position: Types.Vector2;
    velocity: Types.Vector2;

    powerLvl: number;
    victims: number;

    isBorn: boolean;
    isDead: boolean;

    /**
     * constructs the data associated with a single clone.
     */
    constructor() {
        this.isBorn = false;
        this.isDead = false;
        this.victims = 0;
        this.powerLvl = Math.floor(Math.random() * config.START_RANGE); // random starting level in the given range. integer.

        this.velocity = {
            x: generateVelocity(),
            y: generateVelocity()
        };

        this.position = {x: 0, y: 0};

        this.var = Math.floor(Math.random() * COOMER_SPRITES.length);

        this.element = this.buildElement(COOMER_SPRITES[this.var], COOMER_ALTS[this.var]);
    }


    /**
     * helper function to generate the element of the coomer clone.
     * @param file filename of the desired sprite.
     * @param alt alt text for the element.
     * @returns an image element prepared to be placed in the parent element.
     */
    private buildElement(file: string, alt: string): HTMLElement {
        const elem = document.createElement("div");
        const img = document.createElement("img");
        this.counter = document.createElement("span");

        this.counter.innerText = "" + this.victims;
        this.counter.classList.add("kill-count");

        img.src = `/${file}`;
        img.alt = alt;
        img.draggable = false;
        
        elem.classList.add("clone");

        // yell
        elem.addEventListener("click", () => {
            audio.onClick();
        });

        elem.appendChild(img);
        elem.appendChild(this.counter);
        
        return elem;
    }

    /** simply updates the element's position based on the data. */
    private updatePos() {
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
    }

    private bounce(vector: Types.Vector2): void {
        this.velocity.x *= vector.x;
        this.velocity.y *= vector.y;
    }

    private calculateBounce() {
        // boundary collisions
        let doesBounce = false;
        let bounceVector = {x: 1, y: 1};

        // if hit horizontal wall
        if (this.position.x < 0 || this.position.x > (this.parent as HTMLDivElement).clientWidth) {
            bounceVector.x = -1;
            doesBounce = true;
        }
        if (this.position.y < 0 || this.position.y > (this.parent as HTMLDivElement).clientHeight) {
            bounceVector.y = -1;
            doesBounce = true
        }
        if (doesBounce) this.bounce(bounceVector);
    }

    private countVictim() {
        this.victims++;
        this.counter.innerText = "" + this.victims;
    }

    die(): void {
        this.isDead = true;
        this.element.remove();

        // special fx
        new Explosion(this.position, this.parent as HTMLDivElement);
        audio.onDie();
    }

    /**
     * places the clone on the page
     * @param parent element to spawn the clone into
     */
    spawn(parent: HTMLDivElement): void {
        if (this.isBorn) throw {error: true, message: "double birth no thanks"};

        // decide position
        this.position.x = parent.clientWidth * Math.random();
        this.position.y = parent.clientHeight * Math.random();

        this.updatePos();

        // create it
        parent.appendChild(this.element);
        this.parent = parent;
        this.isBorn = true;
    }


    /**
     * function that runs every animation update.
     */
    update(): void {
        if (this.isDead) return;
        // CHECK FOR COLLISIONS!
        this.calculateBounce();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.updatePos();
    }

    /**
     * 
     * @param enemy the opponent to fight...
     */
    fight(enemy: Clone): void {
        let [loser, winner] = [this, enemy].sort((a: Clone, b: Clone): number => {
            return a.powerLvl + b.powerLvl * Math.random() - b.powerLvl + a.powerLvl * Math.random();
        });

        // absorb and die.
        winner.powerLvl += loser.powerLvl;
        winner.countVictim();
        loser.die();
    }
}
