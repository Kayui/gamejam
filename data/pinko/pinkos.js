"use strict";
/* GET home page. */
class Pinkos {
  constructor() {

  }
	getJSON() {
		return {'test':'hehe'};
	}
}


module.exports = function() { return new Pinkos()};
