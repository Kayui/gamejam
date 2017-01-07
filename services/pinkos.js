"use strict";
/* GET home page. */
class Pinkos {
	constructor() {
	}
	getJSON(id, name, form) {
		return { 
			'id': id,
			'name': name,
			'form': form
		};
	}
}

module.exports = function () { return new Pinkos() };
