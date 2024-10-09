/**
 * manages audio behavior on various events.
 */

import * as assets from "./assets";

import { randomFrom } from "./utils";


/**
 * audio triggered on spawn.
 */
export function onSpawn() {
    randomFrom(assets.POP_AUDIOS).play();
    randomFrom(assets.HELLO_AUDIOS).play();
}

/**
 * audio triggered on clone death.
 */
export function onDie() {
    randomFrom(assets.PAIN_AUDIOS).play();
}

/**
 * audio triggered on clicking on a clone.
 */
export function onClick() {
    randomFrom(assets.COOMER_MISC_AUDIOS).play();
}

