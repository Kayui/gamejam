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
            }
        ]
    }

    getDialog(pinkoID) {
        return this.dialogs[0];
    }
}

module.exports = function () { return new Dialogs() };
