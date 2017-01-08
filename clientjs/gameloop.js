

let keyhandler = function(keycode) {
  return;
}


let quit = function() {
  console.log("quitting");

  app.exit();
}

var gameintro = function() {
  keyhandler = function() {
    console.log("start game");
    keyhandler = function() {

    }
    introconductor.player.stop();
    window.setTimeout(initSplash, 500);
    window.setTimeout(getnewoption, 1000);
  }

}

$( document ).keydown(function(key) {
  if (event.altKey && event.which === 81) {
    quit();
  }
  console.log(event.which);
  if (event.which === 27 ){
    quit();
  }
  keyhandler(event.which);
});

$( document ).click(function() {
  var keycode = "click";
  keyhandler(keycode);
});
