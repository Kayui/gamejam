"use strict";

class Render {
	constructor(element) {
		this.element = document.createElement("div");
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
		console.log("Resizing view");
		this.element.style.width =  "100%";
		this.element.style.height =  "100%";
		this.element.style.background = "#000000";
		}
}
