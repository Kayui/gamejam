var getnewoption = function() {
  optionscreen();
};


let currentOptions = [];
let currentId = null;
let currentOption = 0;

var pickOption = function() {
  initSplash(function() {});
}



var optionscreen = function(id, text, options) {
   id = id || 1;
   text = text || "This happend my dear friend you really should do something about it";
   options = options || [{id: 1, text: "hehehe"}, {id: 2, text: "hehehe"}, {id: 3, text: "hehehe"}, {id: 4, text: "hehehe"}]

   currentOptions = options;
   currentId = id;

   app.render = new Render(document.body, true);
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
   holder.style.marginTop = "12%";
   holder.style.marginLeft =  "auto";
   holder.style.marginRight = "auto";
   holder.style.marginBottom = "4vh";
   holder.style.display = "flex";
   app.holder.element.appendChild(holder);

   var character = new DrawCharacterBox(pinkosData, "", holder);

   app.titleHolder = document.createElement('div');
   app.titleHolder.style.width = "100%";
   app.titleHolder.className = "";

   var text = new DrawText(text, {size: 0, center: true, color: 5});
   app.titleHolder.appendChild(text.object);

   app.mainholder.element.appendChild(app.titleHolder);

   keyhandler = function(key) {
     if (key === 13) {
       pickOption();
       return;
     }
     if (key === 38) {
       currentOption--;
     }
     if (key === 40) {
       currentOption++;
     }
     if (currentOption >= currentOptions.length) {
       currentOption = 0;
     }

     if (currentOption < 0) {
       currentOption = currentOptions.length - 1;
     }

     $('.optionpick').removeClass("selected");
     $('.optionid'+currentOption).addClass("selected");
   }
   let i = 0;
   for (let key in options) {
     let x = document.createElement('div');
     x.style.width = "100%";
     x.innerHTML = options[key].text;
     console.log(x);
     let extraClassname = currentOption === i ? " selected" : " ";
     console.log(extraClassname)
     $(x).click(function() {
       currentOption = key;
       window.setTimeout(pickOption, 500);

     });
     x.className = "optionid"+key+ " " + "optionpick" + extraClassname;
     app.mainholder.element.appendChild(x);
     i++;
   }




};
