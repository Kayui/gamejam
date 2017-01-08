"use strict";

var app =  {};
app.render = null;

var resetApp = function() {
  app.render = new Render(document.body, true);
  newGame();
  gameintro();
}

$( document ).ready(function() {
  app.palette = getPalette();
  app.maxW = 1024;

  loadIntroMusic();

	waitForWebfonts(['VT323'], function() {
  initSplash(resetApp);


    // introconductor.player.play();
	});
});
