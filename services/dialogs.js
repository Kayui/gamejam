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
            {
                "id": 5,
                "situation": "You match with a person on Tinder but find out that the person is a communist.",
                "precondition": ["right", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "Kill yourself. Everything beautiful is so wrong.",
                        "lifedrain": 6,
                        "politicalSwing": -2
                    },
                    {
                        "optionID": 1,
                        "text": "Go and meet the person.",
                        "lifedrain": 1,
                        "politicalSwing": 1,
                        "postText": "You instantly realize that life without this person is worthless."
                    },
                    {
                        "optionID": 2,
                        "text": "Send the person a photo of your genitals and Trump's The Art of Deal.",
                        "lifedrain": 2,
                        "politicalSwing": -1
                    }
                ]
            },
            {
                "id": 6,
                "situation": "You have spent allt your time lately remixing tracks by Burzum.",
                "precondition": ["right", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "I love him. He hates the slavish ideology of western civilization as much as I do.",
                        "lifedrain": 1,
                        "politicalSwing": -2
                    },
                    {
                        "optionID": 1,
                        "text": "I happen to like music as hot as he likes wooden churches to be.",
                        "lifedrain": 1,
                        "politicalSwing": -1
                    },
                    {
                        "optionID": 2,
                        "text": "Who is Burzum?",
                        "lifedrain": 1,
                        "politicalSwing": 0
                    },
                    {
                        "optionID": 3,
                        "text": "I listen to angry music so I can be happy and be loved",
                        "lifedrain": 1,
                        "politicalSwing": 1
                    }
                ]
            },
            {
                "id": 7,
                "situation": "Your new lover tells you that you are hopelessly dull and doesn't want to see you again.",
                "precondition": ["right", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "My lover was worth what I payed. Nothing",
                        "lifedrain": 3,
                        "politicalSwing": -1
                    },
                    {
                        "optionID": 1,
                        "text": "Lover?",
                        "lifedrain": 1,
                        "politicalSwing": 0
                    },
                    {
                        "optionID": 2,
                        "text": "Monogamy sucks. I have a lot more.",
                        "lifedrain": 1,
                        "politicalSwing": -1
                    }
                ]
            },
            {
                "id": 8,
                "situation": "If life is pointless, then why do we pay for Netflix?",
                "precondition": ["right", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "Because in heaven those who pay get the best deal.",
                        "lifedrain": 1,
                        "politicalSwing": -2
                    },
                    {
                        "optionID": 1,
                        "text": "Pay for netflix? Streaming-video should be theft!",
                        "lifedrain": 2,
                        "politicalSwing": -2
                    },
                    {
                        "optionID": 2,
                        "text": "Fuck you, I just do and pay what they tell me.",
                        "lifedrain": 1,
                        "politicalSwing": 0
                    }
                ]
            },
            {
                "id": 9,
                "situation": "You went to IKEA and...",
                "precondition": ["left", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "Ate cheap Vegetarian food.",
                        "lifedrain": 1,
                        "politicalSwing": 1
                    },
                    {
                        "optionID": 1,
                        "text": "Lit the christmas goat on fire.",
                        "lifedrain": 2,
                        "politicalSwing": 3
                    },
                    {
                        "optionID": 2,
                        "text": "I am going to sell better and cheaper furniture than they do.",
                        "lifedrain": 3,
                        "politicalSwing": -4
                    }
                ]
            },
            {
                "id": 10,
                "situation": "You feel guilty for the pain the social structure has caused.",
                "precondition": ["left", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "You buy ice cream.",
                        "lifedrain": 1,
                        "politicalSwing": -1
                    },
                    {
                        "optionID": 1,
                        "text": "You write an angry poem and read aloud from your soapbox.",
                        "lifedrain": 2,
                        "politicalSwing": 1
                    },
                    {
                        "optionID": 2,
                        "text": "Go binge drinking in an art gallery.",
                        "lifedrain": 2,
                        "politicalSwing": -4,
                        "postText": "You meet a friend who convince you to form a startup-company."
                    }
                ]
            },
            {
                "id": 11,
                "situation": "The revolution will probably never come",
                "precondition": ["left", "begin", "end", "middle"],
                "options": [
                    {
                        "optionID": 0,
                        "text": "So what? I live for the moment.",
                        "lifedrain": 1,
                        "politicalSwing": 1
                    },
                    {
                        "optionID": 1,
                        "text": "Yeah, it will. Just watch.",
                        "lifedrain": 4,
                        "politicalSwing": 4,
                        "postText": "You started the revolution and no one joined."
                    },
                    {
                        "optionID": 2,
                        "text": "Thank god!",
                        "lifedrain": 1,
                        "politicalSwing": -3
                    }
                ]
            }

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

        if (parseInt(pinko.political) < 4) {
            political = "right";
        }
        else if (parseInt(pinko.political) > 6) {
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