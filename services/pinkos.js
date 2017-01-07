"use strict";
/* GET home page. */
class Pinkos {
	constructor() {
	}
	getJSON(id, name, form) {
		return {
			'id': id,
			'name': name,
			'form': form,
			'width': 8,
			'height': 8
		};
	}
}

module.exports = function () { return new Pinkos() };
