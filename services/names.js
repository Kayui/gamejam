"use strict";
class Names {
	constructor() {
		this.names = [
            "anastasia",
            "nikita",
            "nastya",
            "dima",
            "dasha",
            "alex",
            "maria",
            "sergey",
            "anna",
            "alexander",
            "olga",
            "andrey",
            "alina",
            "vlad",
            "kate",
            "sasha",
            "katya",
            "artem",
            "julia",
            "ivan",
            "irina",
            "anton",
            "marina",
            "dmitry",
            "liza",
            "max",
            "polina",
            "kirill",
            "tanya",
            "maxim",
            "alexandra",
            "egor",
            "daria",
            "andrew",
            "natasha",
            "roman",
            "ksenia",
            "oleg",
            "elena",
            "pavel",
            "ekaterina",
            "ilya",
            "mary",
            "denis",
            "arina",
            "ruslan",
            "yana",
            "alexandr",
            "masha",
            "igor",
            "victoria",
            "vladislav",
            "ann",
            "vladimir",
            "kseniya",
            "alexey"
        ]
	}

	getName() {
        return this.names[parseInt(Math.random() * (this.names.length - 0) + 0)];
	}
}

module.exports = function () { return new Names() };
