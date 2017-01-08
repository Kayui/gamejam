class DrawString {
	constructor() {
		this.fontStyleDefault = {
				fontFamily: 'VT323',
				fontSize: '36px',
				fontStyle: 'normal',
				fill: '#F7EDCA',
				wordWrap: true,
				x: 0,
				y: 0,
				wordWrapWidth: 440
			}
	}
	write(string, options,x, y) {
		options = options || {};
	  let fontOptions = this.fontStyleDefault;
		fontOptions.fontSize = options.fontSize || this.fontStyleDefault.fontSize;
		fontOptions.fill = options.fill || this.fontStyleDefault.fill;
		fontOptions.stroke = options.stroke || this.fontStyleDefault.stroke;


		string = string || "This is a test string";
		var message = new PIXI.Text(
				string,
				fontOptions
		);
		message.x = x || 0;
		message.y = y || 0;

		app.render.draw(message)

	}
}
