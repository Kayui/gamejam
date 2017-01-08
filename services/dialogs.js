"use strict";
class Dialogs {
    constructor() {
        this.dialogs = [
            {
                "id": 0,
                "situation": "this is a sticky situation",
                "precondition": ["left", "right", "center", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "unstick",
                        "lifedrain": 2,
                        "politicalSwing": -1,
                        "postText": "you unstick and scutter away with a grin"
                    },
                    {
                        "optionID": 1,
                        "text": "gtfo",
                        "lifedrain": 1,
                        "politicalSwing": 0,
                        "postText": "nice man, real nice..."
                    },
                    {
                        "optionID": 2,
                        "text": "kill self",
                        "lifedrain": 6,
                        "politicalSwing": 0,
                        "postText": "you fail to kill yourself but die of exposure"
                    },
                    {
                        "optionID": 3,
                        "text": "does not matter",
                        "lifedrain": 2,
                        "politicalSwing": 1
                    }
                ]
            },
            {
                "id": 1,
                "situation": "this is another not as sticky of a situation",
                "precondition": ["left", "right", "center", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "not this again...",
                        "lifedrain": 2,
                        "politicalSwing": -1,
                        "postText": "you unstick and falter away with a grin"
                    },
                    {
                        "optionID": 1,
                        "text": "gtfo",
                        "lifedrain": 1,
                        "politicalSwing": 0,
                        "postText": "nice man, real nice..."
                    },
                    {
                        "optionID": 2,
                        "text": "kill self",
                        "lifedrain": 6,
                        "politicalSwing": 0,
                        "postText": "you fail to kill yourself but die of exposure"
                    },
                    {
                        "optionID": 3,
                        "text": "does not matter",
                        "lifedrain": 2,
                        "politicalSwing": 1
                    }
                ]
            },
            {
                "id": 2,
                "situation": "By average everyone is great.",
                "precondition": ["center", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "Yes.",
                        "lifedrain": 1,
                        "politicalSwing": 0
                    },
                    {
                        "optionID": 1,
                        "text": "No.",
                        "lifedrain": 2,
                        "politicalSwing": 1,
                    },
                    {
                        "optionID": 2,
                        "text": "Some have more responsibility that others.",
                        "lifedrain": 1,
                        "politicalSwing": -1,
                    },
                    {
                        "optionID": 3,
                        "text": "If everyone is dead then yes.",
                        "lifedrain": 2,
                        "politicalSwing": -2
                    }
                ]
            },
            {
                "id": 3,
                "situation": "Where do all the lonely people come from?",
                "precondition": ["center", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "I don't waste time discussing people.",
                        "lifedrain": 4,
                        "politicalSwing": -2,
                        "postText": "you unstick and falter away with a grin"
                    },
                    {
                        "optionID": 1,
                        "text": "I am the only lonely person in the world.",
                        "lifedrain": 6,
                        "politicalSwing": -1,
                        "postText": "You suddenly realize that nothing changes, just rearranges and kill yourself while listening to KoRn"
                    },
                    {
                        "optionID": 2,
                        "text": "There are no lonely people. Just lost opportunities.",
                        "lifedrain": 1,
                        "politicalSwing": 1,
                    }
                ]
            },
            {
                "id": 4,
                "situation": "You are more average than other people.",
                "precondition": ["center", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "That makes no sense. People can't be more average than other people.",
                        "lifedrain": 6,
                        "politicalSwing": 0,
                        "postText": "You waste all time overthinking how something can be more average than other things and stop living your life"
                    },
                    {
                        "optionID": 1,
                        "text": "Yeah but I make more money than they do.",
                        "lifedrain": 1,
                        "politicalSwing": -2,
                    },
                    {
                        "optionID": 2,
                        "text": "Everyone should strive to be like me.",
                        "lifedrain": 1,
                        "politicalSwing": 3
                    }
                ]
            },
        ]
    }

    processDialogOption(dialogID, optionID, pinkoID) {
        let option = "";
        let found = false;
        for (let key in this.dialogs) {
            if (parseInt(this.dialogs[key].id) === parseInt(dialogID)) {
                for (let optionKey in this.dialogs[key].options) {
                    if (parseInt(this.dialogs[key].options[optionKey].optionID) === parseInt(optionID)) {
                        option = this.dialogs[key].options[optionKey];
                        found = true;
                        break;
                    }
                }
                if (found) {
                    console.log(option);
                    return app.services.Database.updatePinko(pinkoID, option.lifedrain, option.politicalSwing);
                }
            }
        }

        // failsafe, no change
        return { "hey": "go away" };//app.services.Database.getPinkos(pinkoID);
    }

    getDialog(pinkoID) {

        let game = "middle";
        let political = "center";
        let pinko = app.services.Database.getPinkos(pinkoID);

        if (pinko.lifepoints === 1) {
            game = "end";
        }
        else if (pinko.lifepoints === 6) {
            game = "begin";
        }

        if (pinko.political === 0) {
            political = "right";
        }
        else if (pinko.political === 9) {
            political = "left";
        }

        var match = [];
        for (let key in this.dialogs) {
            if (this.dialogs[key].precondition.indexOf(game) > -1) {
                if (this.dialogs[key].precondition.indexOf(political) > -1) {
                    match.push(this.dialogs[key]);
                }
            }
        }

        return this.dialogs[Math.floor(Math.random() * (match.length - 0) + 0)];
    }
}

module.exports = function () { return new Dialogs() };
