class DrawLine {
	constructor() {
		this.options= {
			color: 0xffffff,
			x: 0,
			y: 0,
			ypos: 50,
			xpos: 50,
			width: 1
		}
	}
	draw(options) {
		options = options || {};
		var arg = options;
		arg.width = options.width || this.options.width;
		arg.color = options.color || this.options.color;
		console.log(arg);
		var graphics = new PIXI.Graphics();
		graphics.beginFill(arg.color);
		graphics.lineStyle(arg.width, arg.color);
		graphics.moveTo(arg.x, arg.y);
		graphics.lineTo(arg.xpos, arg.ypos);
		graphics.endFill();

		app.render.draw(graphics);
	}
}
