"use strict";

window.onload = function() {
    var userInputs = [];
    var questions = [
        "Please enter your first name ",
        "Please enter GOD in your dialet ",
        "what do you want so badly today",
        "Please enter name of family members seperated by comma(s)",
        "Do you love Daniel? 'yes or No'add'!!!!' to your answer ",
        // Add other questions here...
    ];

    for (var i = 0; i < questions.length; i++) {
        var userInput = prompt(questions[i]);
        userInputs.push(userInput);
    }

    var story = generateStory(userInputs);
    alert("All done! Ready for your story?");
    document.write(story);
};

function generateStory(inputs) {
    return "<h2>I " + inputs[0] + ", will have a wonderful day because " + inputs[1] + " loves me so much and " + inputs[1] + ".is going to provide my everyneeds today. " + inputs[1] + " knows i want " + inputs[2] + " and i know everything is working together for me," + inputs[0] + " good. even for my family, " + inputs[3] + " today will be blissfull for them all, because i believe G0D will supply all our needs. deegitals love you and deegitals know you love him too right? " + inputs[4] + " well irrepective " + inputs[0] + ", you are blessed today Amen.'</h2>";
    // Add the rest of the story here...
}
