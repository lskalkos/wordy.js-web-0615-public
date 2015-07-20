'use strict';

function WordProblem(question) {

    var question = question.slice(8, -1);
    var regex =  / \d | -\d /;

    if(regex.test(question)) {
        question = "(" + question;

        question = question.replace(regex, function(match) {
            return match + ") ";
        });
    }


    this.answer = function() {
       return eval(this.translate(question));
    }
}



WordProblem.prototype.translate = function(question) {
    var math_translations = {
        "plus": "+",
        "minus": "-",
        "multiplied by": "*",
        "divided by": "/"
    }

    var translation = question;

    for(var math_sign in math_translations){
        if (question.indexOf(math_sign) > -1) {
            var regex = new RegExp(math_sign, "g");
            translation = translation.replace(regex, math_translations[math_sign]);
        }
    }

    return translation;
}

function ArgumentError(){}
