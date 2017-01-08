"use strict";
/* GET home page. */
class Politics {
	constructor() {
        this.politics = [
            "fascist",
            "capitalist",
            "social democrat",
            "communist",
            "anarchist"
        ]
	}

    getPolitics(pol) {
        let index = Math.floor(pol/2);
        return this.politics[index];
    }
}

module.exports = function () { return new Politics() };
