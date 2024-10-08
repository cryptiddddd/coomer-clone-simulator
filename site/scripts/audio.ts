
import * as assets from "./assets.js";
import { randomFrom } from "./utils.js";


function randomAudioFrom(files: string[]): HTMLAudioElement {
    return new Audio(`/${assets.AUDIO_DIR}/${randomFrom(files)}`);
}

export function onSpawn() {
    // load
    let pop = randomAudioFrom(assets.POP_AUDIOS);
    let hello = randomAudioFrom(assets.HELLO_AUDIOS);

    // make hnoise
    pop.play();
    hello.play();
}

export function onDie() {
    randomAudioFrom(assets.PAIN_AUDIOS).play();
}

export function onClick() {
    randomAudioFrom(assets.COOMER_MISC_AUDIOS).play();
}

