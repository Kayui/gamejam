"use strict";
class Database {
    constructor() {

    }

    initialize() {
        this.data = {
            "andri": app.services.Pinkos.getJSON(
                0,
                "andri",
                [
                    0, 0, 0, 1, 1, 0, 0, 0,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    0, 1, 1, 1, 1, 1, 1, 0,
                    1, 1, 1, 1, 1, 1, 1, 1,
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
                    5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 5, 5]
            ),
            "marx": app.services.Pinkos.getJSON(
                2,
                "marx",
                [

                    0, 0, 0, 2, 2, 0, 0, 0,
                    0, 0, 0, 2, 2, 0, 0, 0,
                    0, 0, 2, 2, 2, 2, 0, 0,
                    0, 0, 2, 2, 2, 2, 0, 0,
                    0, 2, 2, 2, 2, 2, 2, 0,
                    0, 2, 2, 2, 2, 2, 2, 0,
                    2, 2, 2, 2, 2, 2, 2, 2]
            )
        };
    }
    getPinkos(id) {
        // Gathering up all the pinkos!

        if (id === undefined) {
            // Returning all the pinkos!
            return this.data;
        }
        else {
            // Returning one pinko!
            for (var key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    if (this.data[key]["id"] === parseInt(id)) {
                        return this.data[key];
                    }
                }
            }
        }
        return
    }

    merge(id1, id2) {

        let parent1 = this.getPinkos(id1);
        let parent2 = this.getPinkos(id2);

        let name = "";
        let alphabet = "aaaaaaabcdeeeeeeeefghiiiiiiijklmnoooooooopqrstuuuuuuuvwxyz";

        for (var i = 0; i < 5; i++)
            name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        this.data[name] = app.services.Pinkos.getJSON(
            3,
            name,
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0]
        )

        let size = 0;
        for (var i = 0; i < 32; i++) {
            this.data[name].form[i] = parent1.form[i];
        }

        for (var i = 32; i < 64; i++) {
            this.data[name].form[i] = parent2.form[i];
        }
    }
}

module.exports = function () { return new Database() };