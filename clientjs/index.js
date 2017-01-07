"use strict";

var app =  {};

$( document ).ready(function() {
 	app.render = new Render(document.body);

	app.text = new DrawString();
	app.circle = new DrawCircle();

	waitForWebfonts(['VT323'], function() {
		app.text.write("This is a great game!");
  	app.circle.draw();
	});


});
