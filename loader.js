"use strict";

const fs = require('fs')
  , util = require('util')
  , path = require('path')
  , events = require('events');
;

const Emitter = new events.EventEmitter();

if (typeof require === undefined) {
  const require = requirejs;
}



class Loader {
    constructor() {
        this._load = [];
        this._object = "";
        return this;
    }

    loadDirectory(directory, cat) {
        fs.readdir(directory, function (err, files) {
            files.forEach(function(file) {
                // Recursive call on directories
                fs.stat(directory + "/" + file,
                    function(err, stat) {
                        if (stat && stat.isDirectory()) {
                            this.loadDirectory(directory + "/" + file, cat);
                            return;
                        }
                    }.bind(this));
                // Only allow .js files
                if (file.substr(file.lastIndexOf('.') + 1) !== "js") {
                    return;
                }

                console.log("Loading file "+directory+"/"+file);

                var name = file.substr(0, file.indexOf('.'));
                let object = require(directory + "/" + name)();
                let objectName = object.constructor.name;
                global[this._object] = global[this._object] || {};
                global[this._object][cat] =
                  global[this._object][cat] || {};

                  if (cat === "helper" && objectName === "Includer") {
                      if (global[this._object].$ === undefined) {
                        global[this._object].$ = object;
                      }
                  } else {
                      global[this._object][cat][objectName] = object;
                  }

            }.bind(this));
            if (directory == "./" + cat) {
                Emitter.emit('moduleadd', cat);
                this._load.push(cat);
            }
        }.bind(this));
    }

    include(directory, cat) {
        if (directory === undefined) {
            return this;
        }
        cat = cat || directory;
        this.loadDirectory("./" + directory, cat);

        return this;
    }


    into(object) {
        this._object = object;

        this.onModuleAdd = function (cat) {
            console.log("Loading modules "+cat);
        }.bind(this);

        this._load.forEach(this.onModuleAdd);
        Emitter.on("moduleadd", this.onModuleAdd);

        return this;
    }
}

module.exports = new Loader();
