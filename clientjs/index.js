"use strict";

var app =  {};

$( document ).ready(function() {
 	app.render = new Render(document.body);

	app.text = new DrawString();
	app.circle = new DrawCircle();
	app.pinko = new DrawCharacter();
	console.log(app.pinko);

	waitForWebfonts(['VT323'], function() {
		app.text.write("This is a great game!");
  	app.circle.draw();
		// http://localhost:8080/pinkos/0
		$.ajax({
			url: "/pinkos/0"
		}).done(function(data) {
			app.pinko.draw(data);
		})
	});



});
