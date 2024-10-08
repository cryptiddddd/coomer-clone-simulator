

export class Explosion {
    position: Types.Vector2;
    parent: HTMLDivElement;

    element: HTMLImageElement;

    constructor(position: Types.Vector2, parent: HTMLDivElement) {
        this.position = position;
        this.parent = parent;
        this.element = this.createExplosion();

        this.parent.appendChild(this.element);

        setTimeout(() => {
            this.element.remove();
        }, 1000);
    }

    createExplosion(): HTMLImageElement {
        let element = document.createElement("img");
        element.src = "/explosion.gif";
        element.alt = "a gif animation of an explosion.";

        element.classList.add("explosion");
        element.style.left = "" + this.position.x + "px";
        element.style.top = "" + this.position.y + "px";

        return element;
    }
}
