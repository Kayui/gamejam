var newGame = function() {
	// Create a new character
	// currently faking it
	let parentA = 1;
	let parentB = 2;

	// This CHARACTER SHOULD BE CREATED DYNAMICALLY
	let character = 0;


	app.pinko.drawById(parentA, {x: 40, y: 50});

	app.pinko.drawById(parentB, {x: 420, y: 50});

	//app.line.draw({x: 200, y: 240, xpos: 80, ypos: 120, width: 4});
	// app.line.draw({x: 230, y: 240, xpos: 440, ypos: 120, width: 4});

	app.pinko.drawById(0, {x: 220, y: 200});


	console.log("hehe");


}
