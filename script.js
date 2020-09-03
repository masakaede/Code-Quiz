
//show highscore page once view highscore is pressed and hide all other pages
//go back to start page 
//user press button

//compare answer and display message
//change score and change time if answer is wrong
//hide current question and show next question
//enter initial at all done page
//submit form and show highscore page, hide all done page ex.4-3-26
//clear highscore and 


var startPageEl = document.querySelector(".start-page");
var qPageEl = document.querySelectorAll(".question-page");
var qOnePageEl = document.querySelector(".q-1-page");
var qTwoPageEl = document.querySelector(".q-2-page");
var qThreePageEl = document.querySelector(".q-3-page");
var qFourPageEl = document.querySelector(".q-4-page");
var qFivePageEl = document.querySelector(".q-5-page");
var allDonePageEl = document.querySelector(".all-done-page");
var highscoresPageEl = document.querySelector(".highscores-page");
var responseEl = document.querySelector(".response");
var finalScoreEl = document.querySelector(".final-score");
var highscoresFormEl = document.querySelector("#highscores-form");
var highscoresListEl = document.querySelector("#highscores-list");
var submitEl = document.querySelector("#submit");
var initialEl = document.querySelector("#initial");
var goBackEl = document.querySelector(".go-back");
var clearButtonEl = document.querySelector(".clear-button");

var timeEl = document.querySelector(".time");
var startQuizEl = document.querySelector(".start-quiz");




//set timer
var secondLeft = 75;
var answer = "";

function setTime() {
    var timerInterval = setInterval(function () {
        secondLeft--;
        timeEl.textContent = "Time : " + secondLeft;

        //-10 when wrong answer


        if (secondLeft <= 0) {
            clearInterval(timerInterval);
            //jump to all done page
        }
    }, 1000)
}

for (var i = 0; i < 5; i++) {
    qPageEl[i].addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            console.log("click")
        };

        if (event.target.matches("button") && event.target.matches(".correctAnswer")) {
            answer = "Correct!"
        } else if (event.target.matches("button") && event.target.matches(".wrongAnswer")) {
            answer = "Wrong!"
        };

        if (secondLeft > 10 && answer === "Wrong!") {
            secondLeft = secondLeft - 10
        } else if (secondLeft <= 10 && answer === "Wrong!") {
            secondLeft = 0
        }

        console.log(answer)
        responseEl.textContent = answer;

        if (event.target.matches("button") && event.target.matches(".final-q")) {
            console.log("over")
            finalScoreEl.textContent = "You final score is " + secondLeft + " !"

        }
    })

};

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    var highscorer = "1. " + initialEl.value + " - " + secondLeft;
    var li = document.createElement("li");
    li.textContent = highscorer;
    highscoresListEl.appendChild(li);
})

clearButtonEl.addEventListener("click", function () {
    highscoresListEl.innerHTML = "";
})
//loop through questions





//run settime after button clicked
startQuizEl.addEventListener("click", function (event) {
    event.preventDefault();
    setTime()
});



//
//var questionEl = document.querySelector(".question");
/*var answersEl = document.querySelector(".answers");
var answer-1El = document.querySelector(".answer-1");
var answer-2El = document.querySelector(".answer-2");
var answer-3El = document.querySelector(".answer-3");
var answer-4El = document.querySelector(".answer-4");





var score = 0;

var q1 = {
    ques: "What are people who write computer code called?",
    a1: "1. Programmers",
    a2: "2. Cryptographers",
    a3: "3. Professors",
    a4: "4. Manufacturers",
    correctAnswer: "1. Programmers"
}

var q2 = {
    ques: "Which of the following deos NOT run using a computer program?",
    a1: "1. Bicycle",
    a2: "2. Train",
    a3: "3. Rocket",
    a4: "4. Car",
    correctAnswer: "1. Bicycle"
}

var q3 = {
    ques: "Which of the following is NOT a programming language?",
    a1: "1. Java",
    a2: "2. Python",
    a3: "3. Banana",
    a4: "4. Ruby",
    correctAnswer: "3. Banana"
}

var q4 = {
    ques: "Which if the following is a programming language?",
    a1: "1. Bite",
    a2: "2. Gnaw",
    a3: "3. Itch",
    a4: "4. Scratch",
    correctAnswer: "4. Scratch"
}

var q5 = {
    ques: "What is computer coding?",
    a1: "1. A TV show",
    a2: "2. Telling a computer what to do",
    a3: "3. A radio show",
    a4: "4. A list of function",
    correctAnswer: "2. Telling a computer what to do"
}

//function to check if the answer is correct
function buttonClick() {

}

//function to change to the next question





// click button event
button.addeventlistenser("click", function (

))*/

//event.preventDefault()