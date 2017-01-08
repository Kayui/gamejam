"use strict";

class Render {
	constructor(element, fullscreen) {
		this.element = document.createElement("div");
		this.fullscreen = fullscreen || false;
		element.appendChild(this.element);
		$(window).on('resize', function(){
			this.style();
		}.bind(this));
		this.style();
	}

	draw(element) {
		this.element.appendChild(element.object);
	}
	style() {
		if (this.fullscreen) {
			console.log("Resizing view");
			this.element.style.width =  "100%";
			this.element.style.height =  "100%";
			this.element.style.background = "#333333";
		}
	}
}
