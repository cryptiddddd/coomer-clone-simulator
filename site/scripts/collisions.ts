/** ohg boy */

import type { Clone } from "./clone.js";

/**
 * 
 * @param items the items to compare
 */
export function detectCollisions(items: Set<Clone>): void {
    // awesome 
    Array.from(items).sort((a:Clone, b: Clone): number => {
        const result = Math.sqrt((b.position.x - a.position.x)**2 + (b.position.y - a.position.y)**2);

        // COLLIDE....
        if (result < a.element.width / 2) {
            a.fight(b);
        }

        return result
    });
}
