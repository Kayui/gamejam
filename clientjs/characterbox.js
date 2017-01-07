"use strict";

class DrawCharacterBox {
	constructor(options, classNames, element) {
		options = options || {};
		this.name = options.name || "Karl Marx";
		this.className = classNames || "";
		this.character = new Render(element);
		this.character.element.className = "fade-in "+this.className;
		this.character.element.style.marginLeft = "auto";
		this.character.element.style.marginRight = "auto";
		this.character.element.style.width = "68px";
		this.character.element.style.height = "auto";
		this.img = document.createElement('div');
		this.img.style.background = "#fff";
		this.img.style.width = "64px";
		this.img.style.height = "64px";
		this.character.element.appendChild(this.img);

		this.text = new DrawText("Karl Marx", {size: 0, center: true, color: 4});
		this.character.draw(this.text);
	}


}
