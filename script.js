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
var highscoreEl = document.querySelector(".high-score");
var highscoresListEl = document.querySelector("#highscores-list");
var submitEl = document.querySelector("#submit");
var initialEl = document.querySelector("#initial");
var goBackEl = document.querySelector(".go-back");
var clearButtonEl = document.querySelector(".clear-button");
var timeEl = document.querySelector(".time");
var startQuizEl = document.querySelector(".start-quiz");

var secondLeft;
var answer = "";
var timerInterval;

//set timer
function setTime() {
    secondLeft = 75;
    timerInterval = setInterval(function () {
        secondLeft--;
        timeEl.textContent = "Time : " + secondLeft;

        if (secondLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

// button press
for (var i = 0; i < 5; i++) {
    qPageEl[i].addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches("button") && element.matches(".correctAnswer")) {
            answer = "Correct!"
        } else if (element.matches("button") && element.matches(".wrongAnswer")) {
            answer = "Wrong!"
        };

        if (secondLeft > 10 && answer === "Wrong!") {
            secondLeft = secondLeft - 10
        } else if (secondLeft <= 10 && answer === "Wrong!") {
            secondLeft = 0
        }

        responseEl.textContent = answer;

        if (element.matches("button") && element.matches(".q-1")) {
            qOnePageEl.setAttribute("style", "display : none");
            qTwoPageEl.removeAttribute("style", "display : none");
        } else if (element.matches("button") && element.matches(".q-2")) {
            qTwoPageEl.setAttribute("style", "display : none");
            qThreePageEl.removeAttribute("style", "display : none");
        } else if (element.matches("button") && element.matches(".q-3")) {
            qThreePageEl.setAttribute("style", "display : none");
            qFourPageEl.removeAttribute("style", "display : none");
        } else if (element.matches("button") && element.matches(".q-4")) {
            qFourPageEl.setAttribute("style", "display : none");
            qFivePageEl.removeAttribute("style", "display : none");
        } else if (element.matches("button") && element.matches(".q-5")) {
            clearInterval(timerInterval)
            timeEl.setAttribute("style", "display : none");
            qFivePageEl.setAttribute("style", "display : none");
            allDonePageEl.removeAttribute("style", "display : none");
            finalScoreEl.textContent = "You final score is " + secondLeft + " !";
            responseEl.textContent = ""
        }
    })
};


//run quiz
startQuizEl.addEventListener("click", function (event) {
    event.preventDefault();
    startPageEl.setAttribute("style", "display : none");
    qOnePageEl.removeAttribute("style", "display : none");
    setTime()
});

//submit score
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    var highscorer = "1. " + initialEl.value + " - " + secondLeft;
    var li = document.createElement("li");
    li.textContent = highscorer;
    highscoresListEl.appendChild(li);
    allDonePageEl.setAttribute("style", "display : none");
    highscoresPageEl.removeAttribute("style", "display : none");
    timeEl.textContent = ""
});

//clear button
clearButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    highscoresListEl.innerHTML = "";
});

//go back button
goBackEl.addEventListener("click", function (event) {
    event.preventDefault();
    highscoresPageEl.setAttribute("style", "display : none");
    startPageEl.removeAttribute("style", "display : none");
    timeEl.removeAttribute("style", "display : none");
});