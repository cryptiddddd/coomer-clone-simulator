/** specifications for which assets are where. */

import * as config from "./config";


// directories
export const SPRITE_DIR = "sprites";
export const AUDIO_DIR = "audio";


/**
 * creates a pre-loaded audio ready to be called to play.
 * @param src audio source
 * @returns html element for the given source.
 */
function preloadAudio(...audios: string[]): HTMLAudioElement[] {
    let elements = [];

    for (let src of audios) {

        let audio = document.createElement("audio") as HTMLAudioElement;
        
        audio.volume = config.BASE_VOL;
        audio.preload = "auto";
        audio.src = `/${AUDIO_DIR}/${src}`;

        elements.push(audio)
    }

    return elements;
}


// file names
export let EXPLOSION_GIF = "explosion.gif";

export let COOMER_SPRITES = [
    "coomer1.png",
    "coomer2.png",
    "coomer3.png",
    "coomer4.png",
];

export let COOMER_ALTS = [
    "A cute, chibi-style drawing of Dr. Coomer smiles and waves at the viewer, excitedly tilting to his left.",
    "A cute, chibi-style drawing of Dr. Coomer sits criss-cross-applesauce on the floor, patiently looking up at the viewer.",
    "A cute, chibi-style drawing of Dr. Coomer standing with a somewhat-serious look on his face, hands in fists as though he is ready to throw down at any time.",
    "A cute, chibi-style drawing of Dr. Coomer. He stands patiently, eyes closed cheerily with his arms tucked behind his back.",
];

export const SECRET_COOMER_SPRITES = [
    "coomer5.png"
];

export const SECRET_COOMER_ALTS = [
    "A cute, chibi-style drawing of Dr. Coomer. His face is covered in blood, his hands are bloody, his labcoat is stained, and his haunting white eyes stare at the viewer."
];

export const POP_AUDIOS = preloadAudio(
    "pop-2.mp3",
    "pop-3.mp3",
    "pop-6.mp3",
);

export const HELLO_AUDIOS = preloadAudio(
    "hello1.wav",
    "hello2.wav",
    "hello3.wav",
    "hello4.wav",
    "hello5.wav",
    "hello6.wav",
    "hello7.wav",
    "hello8.wav",
);

export const PAIN_AUDIOS = preloadAudio(
    "pain1.wav",
    "pain2.wav",
    "pain3.wav",
    "pain4.wav",
    "pain5.wav",
    "crash1.wav",
    "help1.wav",
    "scream1.wav"
);

export const COOMER_MISC_AUDIOS = preloadAudio(
    "soda1.wav",
    "soda2.wav",
    "spices1.wav",
    "gooping1.wav",
    "myclone1.wav",
    "ropes1.wav",
    "scared1.wav",
);
