"use strict";

class DrawText {
	constructor(text, options) {
		this.classNames = ['text', 'textHeader', 'textTitle'];
		options = options || {};
		this.center = options.center || false;
		this.color = options.color || 1;
		this.size = options.size || 0;
		this.text = text || "NO STRING";
		this.draw();
	}

	draw() {
				this.object = document.createElement("div");
				this.object.className = this.classNames[this.size];
				if (this.center) {
					this.object.style.width = "100%";
					this.object.style.textAlign = "center";
				}
				if (this.color != 0) {
					this.object.style.color = app.palette[this.color];
				}

				this.object.innerHTML = this.text;
	}

}
