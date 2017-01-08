

let keyhandler = function(keycode) {
  return;
}


let quit = function() {
  console.log("quitting");
}

var gameintro = function() {

}

$( document ).keydown(function(key) {
  if (event.altKey && event.which === 81) {
    quit();
    return;
  }
  console.log(event.which);
  if (event.which === 27 ){
    quit();
    return;
  }
  if (event.which === 48 ){
    showUsers();
    return;
  }
  keyhandler(event.which);
});

$( document ).click(function() {
  var keycode = "click";
  keyhandler(keycode);
});
