/**
 * manages audio behavior on various events.
 */

import * as assets from "./assets";
import config from "./config";

import { randomFrom } from "./utils";


function playFrom(audios: HTMLAudioElement[]): HTMLAudioElement {
    const pick = randomFrom(audios) as HTMLAudioElement;
    pick.volume = config.BASE_VOL;

    return pick;
}

/**
 * audio triggered on spawn.
 */
export function onSpawn() {
    playFrom(assets.POP_AUDIOS).play();
    playFrom(assets.HELLO_AUDIOS).play();
}

/**
 * audio triggered on clone death.
 */
export function onDie() {
    playFrom(assets.PAIN_AUDIOS).play();
}

/**
 * audio triggered on clicking on a clone.
 */
export function onClick() {
    playFrom(assets.COOMER_MISC_AUDIOS).play();
}

