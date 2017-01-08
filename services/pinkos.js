"use strict";
/* GET home page. */
class Pinkos {
	constructor() {
	}
	getJSON(id, name, form, pol) {
		return {
			'id': id,
			'name': name,
			'form': form,
			'political': pol,
			'politicalName': app.services.Politics.getPolitics(pol),
			'lifepoints': 6,
			'width': 8,
			'height': 8,
			'imageUrl': '/assets/characters/' + id + '.png'
		};
	}
}

module.exports = function () { return new Pinkos() };
