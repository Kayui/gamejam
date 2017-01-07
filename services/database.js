"use strict";
class Database {
    constructor() {

    }
    getPinkos(id) {
        // Gathering up all the pinkos!
        let data = {
            "andri": app.services.Pinkos.getJSON(
                0,
                "andri",
                [
                    0, 0, 0, 1, 1, 0, 0, 0,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    1, 1, 1, 1, 1, 1, 1, 1,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    0, 0, 0, 1, 1, 0, 0, 0]
            ),
            "lommi": app.services.Pinkos.getJSON(
                1,
                "lommi",
                [
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5]
            ),
            "marx": app.services.Pinkos.getJSON(
                2,
                "marx",
                [

                    0, 0, 0, 2, 2, 0, 0, 0,
                    0, 0, 2, 2, 2, 2, 0, 0,
                    0, 0, 2, 2, 2, 2, 0, 0,
                    0, 2, 2, 2, 2, 2, 2, 0,
                    0, 2, 2, 2, 2, 2, 2, 0,
                    2, 2, 2, 2, 2, 2, 2, 2]
            )
        };

        if (id === undefined) {
            // Returning all the pinkos!
            return data;
        }
        else {
            // Returning one pinko!
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    if (data[key]["id"] === parseInt(id)) {
                        return data[key];
                    }
                }
            }
        }
        return
    }
}


module.exports = function () { return new Database() };
