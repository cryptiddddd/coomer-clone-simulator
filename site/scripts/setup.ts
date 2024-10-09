
import { SPRITE_DIR } from "./assets";


/**
 * a function ran before anything else that preloads all used assets.
 */
export function preloadImg(...images: string[]): void {
    for (let href of images) {
        let link = document.createElement("link") as HTMLLinkElement;
        link.rel = "preload";
        link.as = "image";

        link.href = `/${SPRITE_DIR}/${href}`;

        document.head.appendChild(link);
    }
}
