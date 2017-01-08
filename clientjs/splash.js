
var canvas = document.createElement('canvas');;
var pilotColors = ["0",
    "#4D00AB",
    "#372FD6",
    "#00FFB3",
    "#FFFB00",
    "#FF005E",
    "#000000",
    "#333333"];
var pilotColorsIndex = 0;
var stripeStartPos = 0;
var ctx = canvas.getContext("2d");

var initSplash = function(endfunction) {
  document.body.innerHTML = '';
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  splashMusic();
  setTimeout(ShowDataSignal, 250);
  setTimeout(pilotSignalTimer, 400);
  setTimeout(ShowDataSignal, 600);
  setTimeout(ShowDataSignal, 800);
  setTimeout(ShowDataSignal, 900);
  setTimeout(ShowDataSignal, 1000);
  setTimeout(pilotSignalTimer, 1050);
  setTimeout(pilotSignalTimer, 1150);
  setTimeout(pilotSignalTimer, 1200);
  setTimeout(pilotSignalTimer, 1400);
  setTimeout(pilotSignalTimer, 1600);
  setTimeout(killIntro, 2500);
  setTimeout(endfunction, 2500);
}

var pilotSignalTimer = function() {
    ctx.fillStyle = pilotColors[pilotColorsIndex];
    pilotColorsIndex++;
    if (pilotColors > pilotColors.length) {
       pilotColorsIndex = 1;
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var stripeStartPos = 0;

};
var ShowDataSignal = function() {
 ctx.fillStyle = pilotColors[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pilotColors[1];
    var stripeThinckness = canvas.height / 27;
    for (var i = -1; i < 28; i += 2) {
        ctx.fillRect(0, i * stripeThinckness+stripeStartPos, canvas.width, stripeThinckness);
    }
    stripeStartPos++;
    if (stripeStartPos > stripeThinckness * 2)
        stripeStartPos = 0;

}

var killIntro = function() {
	document.body.removeChild(canvas);
}

pilotSignalTimer();
