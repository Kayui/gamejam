"use strict";

var app =  {};

$( document ).ready(function() {
  app.render = new Render(document.body, true);
  app.palette = getPalette();
  app.maxW = 1024;

  loadIntroMusic();

	waitForWebfonts(['VT323'], function() {
    app.mainholder = new Render(app.render.element);
    app.holder = new Render(app.mainholder.element);


    app.mainholder.element.style.height = "auto";
    app.mainholder.marginTop = "auto";
    app.mainholder.marginBottom = "auto";

    app.holder.element.style.height = "auto";

    var holder = document.createElement("div");
    holder.style.height = "100%";
    holder.style.maxWidth = "480px";
    holder.style.width = "90%";
    holder.style.marginLeft =  "auto";
    holder.style.marginRight = "auto";
    holder.style.marginBottom = "4vh";
    holder.style.display = "flex";
    app.holder.element.appendChild(holder);


    var character = new DrawCharacterBox(undefined, "", holder);
    var character2 = new DrawCharacterBox(undefined, "one", holder);

    // app.render.draw(character.character);

    app.titleHolder = document.createElement('div');
    app.titleHolder.style.width = "100%";
    app.titleHolder.style.height = "100%";
    app.titleHolder.className = "fade-in three";

    var title = new DrawText("Synthesis", {size: 2, center: true, color: 0});
    var text = new DrawText("A new pinko is born!", {size: 0, center: true, color: 5});

    app.titleHolder.appendChild(title.object);
    app.titleHolder.appendChild(text.object);

    app.mainholder.element.appendChild(app.titleHolder);

    var holder2 = document.createElement("div");
    holder2.style.height = "100%";
    holder2.style.maxWidth = "480px";
    holder2.style.width = "90%";
    holder2.style.marginLeft =  "auto";
    holder2.style.marginRight = "auto";
    holder2.style.marginTop = "6vh";
    holder2.style.display = "flex";
    app.mainholder.element.appendChild(holder2);

    var character = new DrawCharacterBox(undefined, "four", holder2);

    app.nextLine = document.createElement("div");
    app.nextLine.className = "bottomline";

    var topLine = document.createElement("div");
    topLine.className = "topline";

    app.mainholder.element.appendChild(app.nextLine);
    app.mainholder.element.appendChild(topLine);

    app.introTimer = setInterval(function(){
       var i = window.getComputedStyle(app.titleHolder).getPropertyValue("opacity");
       console.log(i);
       if (parseInt(i) > 0.4) {
         introconductor.player.play();
         window.setTimeout(function() {
            app.nextLine.innerHTML = "Press any key to continue . . .";
          }, 1000);
         window.clearInterval(app.introTimer)
       }
     }, 10);


    // introconductor.player.play();
	});
});
