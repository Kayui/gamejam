class DrawCircle {
	constructor() {
		this.options= {
			color: 0xe74c3c,
			x: 0,
			y: 0,
			fill: false,
			radius: 100,
			width: 2
		}
	}
	draw(options) {
		options = options || {};
		var arg = this.options;
		arg.x = options.x || this.options.x;
		arg.y = options.y || this.options.y;
		arg.radius = options.radius || this.options.radius;
		arg.color = options.color || this.options.color;

		var graphics = new PIXI.Graphics();
		if (arg.fill) {
			graphics.beginFill(arg.color); // Red
		} else {
			graphics.lineStyle (arg.width, arg.color, 1);
		}
		graphics.drawCircle(arg.x, arg.y, arg.radius);

		// Applies fill to lines and shapes since the last call to beginFill.
		if (arg.fill) {
			graphics.endFill();
		}
		app.render.draw(graphics);
	}
}
