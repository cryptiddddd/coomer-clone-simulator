/**
 * manages audio behavior on various events.
 */

import * as assets from "./assets.js";
import * as config from "./config.js";

import { randomFrom } from "./utils.js";


/**
 * get a playable audio for a random file from the given collection.
 * @param files a list of files to pick from.
 * @returns playable audio of a random file.
 */
function randomAudioFrom(files: string[]): HTMLAudioElement {
    let file = new Audio(`/${assets.AUDIO_DIR}/${randomFrom(files)}`);
    file.volume = config.BASE_VOL;

    return file;
}

/**
 * audio triggered on spawn.
 */
export function onSpawn() {
    // load
    let pop = randomAudioFrom(assets.POP_AUDIOS);
    let hello = randomAudioFrom(assets.HELLO_AUDIOS);

    // make hnoise
    pop.play();
    hello.play();
}

/**
 * audio triggered on clone death.
 */
export function onDie() {
    randomAudioFrom(assets.PAIN_AUDIOS).play();
}

/**
 * audio triggered on clicking on a clone.
 */
export function onClick() {
    randomAudioFrom(assets.COOMER_MISC_AUDIOS).play();
}

