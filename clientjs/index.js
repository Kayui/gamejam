"use strict";
var app =  {};
app.render = null;


if (typeof process === undefined || typeof process.versions === undefined || typeof process.versions.electron === undefined) {
  // This is done to make the game fail in a normal browser HAHAHHAAH!
}
else {

var resetApp = function() {
  app.render = new Render(document.body, true);
  newGame();
  gameintro();
}

$( document ).ready(function() {
  app.palette = getPalette();
  app.maxW = 1024;

  splashMusic();
  loadIntroMusic();

	waitForWebfonts(['VT323'], function() {
  initSplash(resetApp);


    // introconductor.player.play();
	});
});
}
