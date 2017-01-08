class DrawCharacter {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = 10;
		this.height = 10;
		this.palette = [
			0,
			0x4D00AB,
			0x372FD6,
			0x00FFB3,
			0xFFFB00,
			0xFF005E];
	}
	drawById(id, options) {
		$.ajax({
			url: "/pinkos/"+parseInt(id)
		}).done(function(data) {
			app.pinko.draw(data, options);
		})
	}
	drawSet(data, options) {
		options = options || {};
		let x = options.x || this.x;
		let y = options.y || this.y;
		let graphics = new PIXI.Graphics();

		let currentX = x;
		let currentY = y;

		for (let key in data) {
			this.draw(data[key], {x: currentX, y: currentY});
			currentY += (this.height * 8) + 20;
		}
	}
	draw(data, options) {
		options = options || {};
		let x = options.x || this.x;
		let y = options.y || this.y;
		let graphics = new PIXI.Graphics();

		let currentX = x;
		let currentY = y;
		let i = 0;
		for (let key in data.form) {
			// console.log(data.form[key]);
			if (data.form[key] !== 0) {
				graphics.beginFill(this.palette[data.form[key]]);
				graphics.drawRect(currentX, currentY, this.width, this.height);
			}
			i++;
			if (i >= data.width) {
				i = 0;
				currentY += this.height;
				currentX = x;
			} else {
				currentX += this.width;
			}

		}
		app.render.draw(graphics);
	}
}
