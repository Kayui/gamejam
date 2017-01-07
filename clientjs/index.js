"use strict";

var app =  {};

$( document ).ready(function() {
 	app.render = new Render(document.body);
  app.palette = getPalette();
  app.maxW = 1024;

	waitForWebfonts(['VT323'], function() {
    var title = new DrawText("Synthesia", {size: 2, center: true, color: 0});
    app.render.draw(title);
	});



});
