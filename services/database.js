"use strict";
const PNG = require('pngjs').PNG,
    fs = require('fs');


class Database {
    constructor() {

    }

    initialize() {
        if (!this.data) {
            this.data = {
                "antonio gramsci": app.services.Pinkos.getJSON(
                    0,
                    "antonio gramsci",
                    [
                        0, 0, 0, 1, 1, 0, 0, 0,
                        0, 1, 1, 1, 1, 1, 1, 0,
                        0, 1, 1, 1, 1, 1, 1, 0,
                        1, 1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 1, 1,
                        0, 1, 1, 1, 1, 1, 1, 0,
                        0, 1, 1, 1, 1, 1, 1, 0,
                        0, 0, 0, 1, 1, 0, 0, 0],
                        6
                ),
                "lommi lomm": app.services.Pinkos.getJSON(
                    1,
                    "lommi lomm",
                    [
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5],
                        9
                ),
                "karl marx": app.services.Pinkos.getJSON(
                    2,
                    "karl marx",
                    [
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 2, 2, 0, 0, 0,
                        0, 0, 0, 2, 2, 0, 0, 0,
                        0, 0, 2, 2, 2, 2, 0, 0,
                        0, 0, 2, 2, 2, 2, 0, 0,
                        0, 2, 2, 2, 2, 2, 2, 0,
                        0, 2, 2, 2, 2, 2, 2, 0,
                        2, 2, 2, 2, 2, 2, 2, 2],
                        7
                ),
                "andri rafn": app.services.Pinkos.getJSON(
                    3,
                    "andri rafn",
                    [
                        0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 4, 1, 0, 0, 0,
                        0, 0, 0, 4, 1, 0, 0, 0,
                        0, 0, 4, 4, 1, 1, 0, 0,
                        0, 0, 4, 4, 1, 1, 0, 0,
                        0, 4, 4, 4, 1, 1, 1, 0,
                        0, 4, 4, 4, 1, 1, 1, 0,
                        4, 4, 4, 4, 1, 1, 1, 1],
                        2
                ),
                "vladimir ulyanov": app.services.Pinkos.getJSON(
                    4,
                    "vladimir ulyanov",
                    [
                        1, 1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 3, 3, 1, 1, 1,
                        1, 1, 3, 3, 3, 3, 1, 1,
                        1, 1, 3, 1, 1, 3, 1, 1,
                        1, 1, 3, 3, 3, 3, 1, 1,
                        1, 3, 3, 1, 1, 3, 3, 1,
                        1, 3, 1, 1, 1, 1, 3, 1,
                        3, 3, 1, 1, 1, 1, 3, 3],
                        4
                ),
                "leon trotsky": app.services.Pinkos.getJSON(
                    5,
                    "leon trotsky",
                    [
                        5, 3, 3, 3, 3, 3, 3, 3,
                        5, 5, 3, 3, 3, 3, 3, 3,
                        5, 5, 5, 3, 3, 3, 3, 5,
                        5, 5, 5, 3, 3, 3, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 5,
                        5, 5, 5, 5, 5, 5, 5, 3,
                        5, 5, 5, 5, 5, 5, 3, 3,
                        5, 5, 5, 5, 5, 3, 3, 3],
                        6
                ),
                "joseph stalin": app.services.Pinkos.getJSON(
                    6,
                    "joseph stalin",
                    [
                        0, 0, 0, 0, 0, 0, 0, 4,
                        0, 0, 0, 0, 0, 4, 4, 4,
                        0, 0, 0, 0, 0, 4, 0, 0,
                        0, 0, 0, 4, 4, 4, 0, 0,
                        0, 0, 0, 4, 0, 0, 0, 0,
                        0, 4, 4, 4, 0, 0, 0, 0,
                        0, 4, 0, 0, 0, 0, 0, 0,
                        4, 4, 0, 0, 0, 0, 0, 0],
                        0
                )
            };

            this.getImage(0);
            this.getImage(1);
            this.getImage(2);
            this.getImage(3);
            this.getImage(4);
            this.getImage(5);
            this.getImage(6);
        }
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
    }

    getMaxID() {
        let id = 0;
        for (var key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                if (this.data[key]["id"] > id) {
                    id = this.data[key]["id"];
                }
            }
        }
        return id;
    }

    merge(id1, id2) {
        let parent1 = this.getPinkos(id1);
        let parent2 = this.getPinkos(id2);

        let name = app.services.Names.getName();

        let bias = true;
        if (Math.random() > 0.5) {
            bias = false;
        }

        console.log("\n \n");
        console.log("id1: " + id1);
        console.log(parent1);
        console.log("id2: " + id2);
        console.log(parent2);
        console.log("\n \n");
        name += " ";

        let id = this.getMaxID();
        id++;
        console.log("maxID: " + id);

        if (bias) {
            name += parent2.name.split(" ")[1];
        }
        else {
            name += parent1.name.split(" ")[1];
        }

        let pol = 0;
        if(parent1.political >= parent2.political){
            pol = parseInt(Math.random() * (parent1.political - parent2.political) + parent2.political);
        }
        else{
            pol = parseInt(Math.random() * (parent2.political - parent1.political) + parent1.political);
        }

        this.data[name] = app.services.Pinkos.getJSON(
            id,
            name,
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0],
                pol
        )

        let size = 0;
        for (let i = 0; i < 32; i++) {
            if (bias) {
                this.data[name].form[i] = parent2.form[i];
            }
            else {
                this.data[name].form[i] = parent1.form[i];
            }
        }

        for (let i = 32; i < 64; i++) {
            if (bias) {
                this.data[name].form[i] = parent1.form[i];
            }
            else {
                this.data[name].form[i] = parent2.form[i];
            }
        }

        this.getImage(this.data[name].id);
        return this.data[name];
    }

    getImage(id) {
        let name = this.getPinkos(id).name;
        let png = new PNG({
            width: 64,
            height: 64,
            filterType: 1
        });

        for (let posX = 0; posX < 8; posX++) {
            for (let posY = 0; posY < 8; posY++) {
                let color = app.services.Colors.getColors(this.data[name].form[posY * 8 + posX]);
                for (let x = posX * 8; x < 8 * (posX + 1); x++) {
                    for (let y = posY * 8; y < 8 * (posY + 1); y++) {
                        let idx = (png.width * y + x) << 2;
                        png.data[idx] = color.R;
                        png.data[idx + 1] = color.G;
                        png.data[idx + 2] = color.B;
                        if (this.data[name].form[posY * 8 + posX] === 0) {
                            png.data[idx + 3] = 0; // transparent
                        }
                        else {
                            png.data[idx + 3] = 255; // visible
                        }
                    }
                }
            }
        }

        png.pack().pipe(fs.createWriteStream('public/assets/characters/' + this.data[name].id + '.png'));
    }
}

module.exports = function () { return new Database() };
