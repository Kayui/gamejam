"use strict";
/* GET home page. */
class Colors {
	constructor() {
		this.colors = {
			"0": {
				"R": 0,
				"G": 0,
				"B": 0
			},
			"1": {
				"R": 77,
				"G": 0,
				"B": 171
			},
			"2": {
				"R": 55,
				"G": 47,
				"B": 214
			},
			"3": {
				"R": 0,
				"G": 255,
				"B": 179
			},
			"4": {
				"R": 255,
				"G": 251,
				"B": 0
			},
			"5": {
				"R": 255,
				"G": 0,
				"B": 94
			}
		};
	}

	getColors(id) {
		if (id === undefined) {
			// Returning all the colors!
			return this.colors;
		}
        else {
            // Returning one color!
            for (var key in this.colors) {
                if (this.colors.hasOwnProperty(key)) {
					if (parseInt(key) === id) {
                        return this.colors[key];
                    }
                }
            }
        }
	}
}

module.exports = function () { return new Colors() };
