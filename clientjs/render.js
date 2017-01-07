"use strict";

class Render {
	constructor(element) {
		this.renderer = PIXI.autoDetectRenderer(1, 1);
		element.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
		this.style();
		$(window).on('resize', function(){
			this.style();
		}.bind(this));
	}

	draw(element) {
		this.stage.addChild(element);
		this.renderer.render(this.stage);
	}
	style() {
		console.log("Resizing view");
		this.renderer.view.style.position = "absolute";
		this.renderer.view.style.display = "block";
		this.renderer.autoResize = true;
		this.renderer.resize(window.innerWidth, window.innerHeight);
		this.renderer.render(this.stage);
	}
}
