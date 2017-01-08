let usersAreShown = false;

var showUsers = function() {
	if (usersAreShown) {
		usersAreShown = false;
		app.extrarender.element.style.display = "none";
		return;
	}
	usersAreShown = true;
	$.ajax({
  url: "/pinkos",
  success: function(data) {
 	 showUsersHelper(data);
  }
  });
};

var showUsersHelper = function(users) {
   app.extrarender = new Render(document.body, true);
	 app.extrarender.element.style.zIndex = "2000";
	 app.extrarender.element.style.width = "100%";
	 app.extrarender.element.style.height = "100%";
	 app.extrarender.element.style.background = "#000";
	 app.extrarender.element.style.position ="absolute";
	 app.extrarender.element.style.top ="0";
	 app.extrarender.element.style.left ="0";
	 let grid = document.createElement("div");
	 grid.style.display = "flex";
	 grid.style.flexWrap = "wrap";
	 grid.style.flexDirection = "row";

	 function getHeight(imgSize) {
		var width = parseInt($( window ).width());
		var height = parseInt($( window).height());
		console.log(width);
		var sizeImg = Object.keys(users).length * imgSize;
		var rows = Math.ceil(sizeImg / width);
		console.log("Rows are" +rows)
		return imgSize * rows;
	 }
	 let imgSize = 64;
	 console.log(getHeight(imgSize));
	 console.log($( window).height());

	 var height = parseInt($( window).height());
	 console.log("Height is "+height);
	 while (parseInt(getHeight(imgSize)) > height) {
		 imgSize = imgSize - 1;
	 }
	 console.log("Image size is"+ imgSize);
	 grid.style.overflowY = "scroll";
	 grid.style.height=height-20+"px";
	 for (let key in users) {
		 let y = document.createElement('div');
		 y.style.maxWidth = "64px";
		 y.style.width = "50%";
		 y.style.margin = "15px";
		 let x = document.createElement('img');
		 x.src = users[key].imageUrl;
		 y.title = users[key].name + " " + users[key].politicalName;
		 x.style.display = "block";
		 x.style.width =  imgSize + "px";
		 x.style.height = "auto";

		 y.appendChild(x);
		 grid.appendChild(y);
	 }
	 	app.extrarender.element.appendChild(grid);

	 console.log(users);
 };
