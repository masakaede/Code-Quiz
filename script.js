//4 pages
var startPageEl = document.querySelector(".start-page");
var qPageEl = document.querySelector(".question-page");
var allDonePageEl = document.querySelector(".all-done-page");
var highscoresPageEl = document.querySelector(".highscores-page");
//question page
var questionEl = document.querySelector(".question");
var aButtonEl = document.querySelector(".answer-button");
var button1El = document.querySelector(".answer-button-1");
var button2El = document.querySelector(".answer-button-2");
var button3El = document.querySelector(".answer-button-3");
var button4El = document.querySelector(".answer-button-4");

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
            qPageEl.setAttribute("style", "display : none");
            allDonePageEl.removeAttribute("style", "display : none");
        }
    }, 1000)
}

//constructor function - questions and answers 
function questions(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
}

//question objects
var question1 = new questions("Q1. What are people who write computer code called?",
    "1. Programmers", "2. Cryptographers", "3. Professors", "4. Manufacturers");

var question2 = new questions("Q2. Which of the following deos NOT run using a computer program?",
    "1. Bicycle", "2. Train", "3. Rocke", "4. Car")

var question3 = new questions("Q3. Which of the following is NOT a programming language?",
    "1. Java", "2. Python", "3. Banana", "4. Ruby")

var question4 = new questions("Q4. Which if the following is a programming language?",
    "1. Bite", "2. Gnaw", "3. Itch", "4. Scratch")

var question5 = new questions("Q5. What is computer coding?",
    "1. A TV show", "2. Telling a computer what to do", "3. A radio show", "4. A list of function")


//correct answers
var correctAnswers = ["1. Programmers", "1. Bicycle", "3. Banana", "4. Scratch", "2. Telling a computer what to do"]

//button press
aButtonEl.addEventListener("click", function (event) {
    var element = event.target;

    //check answer
    if (element.matches("button") && element.matches(".correctAnswer")) {
        answer = "Correct!"
    } else if (element.matches("button") && !element.matches(".correctAnswer")) {
        answer = "Wrong!"
    };

    //reduce time
    if (secondLeft > 10 && answer === "Wrong!") {
        secondLeft = secondLeft - 10
    } else if (secondLeft <= 10 && answer === "Wrong!") {
        secondLeft = 0
    }
    responseEl.textContent = answer;

    //change questions and answers
    if (element.matches("button") && aButtonEl.classList.contains("q-1")) {
        //change class
        aButtonEl.setAttribute("class", "q-2");
        button1El.setAttribute("class", "answer-button-1 correctAnswer");
        //push q2 question & answer
        questionEl.textContent = question2.question;
        button1El.textContent = question2.answer1;
        button2El.textContent = question2.answer2;
        button3El.textContent = question2.answer3;
        button4El.textContent = question2.answer4;

    } else if (element.matches("button") && aButtonEl.classList.contains("q-2")) {
        //change class
        aButtonEl.setAttribute("class", "q-3");
        button1El.setAttribute("class", "answer-button-1");
        button3El.setAttribute("class", "answer-button-3 correctAnswer");
        //push q3 question & answer
        questionEl.textContent = question3.question;
        button1El.textContent = question3.answer1;
        button2El.textContent = question3.answer2;
        button3El.textContent = question3.answer3;
        button4El.textContent = question3.answer4;
    } else if (element.matches("button") && aButtonEl.classList.contains("q-3")) {
        //change class
        aButtonEl.setAttribute("class", "q-4");
        button3El.setAttribute("class", "answer-button-3");
        button4El.setAttribute("class", "answer-button-4 correctAnswer");
        //push q4 question & answer
        questionEl.textContent = question4.question;
        button1El.textContent = question4.answer1;
        button2El.textContent = question4.answer2;
        button3El.textContent = question4.answer3;
        button4El.textContent = question4.answer4;
    } else if (element.matches("button") && aButtonEl.classList.contains("q-4")) {
        //change class
        aButtonEl.setAttribute("class", "q-5");
        button4El.setAttribute("class", "answer-button-4");
        button2El.setAttribute("class", "answer-button-2 correctAnswer");
        //push q4 question & answer
        questionEl.textContent = question5.question;
        button1El.textContent = question5.answer1;
        button2El.textContent = question5.answer2;
        button3El.textContent = question5.answer3;
        button4El.textContent = question5.answer4;
    } else if (element.matches("button") && aButtonEl.classList.contains("q-5")) {
        clearInterval(timerInterval)
        timeEl.setAttribute("style", "display : none");
        qPageEl.setAttribute("style", "display : none");
        allDonePageEl.removeAttribute("style", "display : none");
        finalScoreEl.textContent = "You final score is " + secondLeft + " !";
    }
})

//view highscores
highscoreEl.addEventListener("click", function (event) {
    event.preventDefault();
    startPageEl.setAttribute("style", "display : none");
    qPageEl.setAttribute("style", "display : none");
    allDonePageEl.setAttribute("style", "display : none");
    highscoresPageEl.removeAttribute("style", "display : none");
    responseEl.textContent = ""
    clearInterval(timerInterval)
    timeEl.textContent = ""
})

//run quiz
startQuizEl.addEventListener("click", function (event) {
    event.preventDefault();
    startPageEl.setAttribute("style", "display : none");
    qPageEl.removeAttribute("style", "display : none");
    timeEl.removeAttribute("style", "display : none");
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
    responseEl.textContent = ""
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

    //change class
    aButtonEl.setAttribute("class", "q-1");
    button1El.setAttribute("class", "answer-button-1 correctAnswer");
    button2El.setAttribute("class", "answer-button-2");

    //push q1 question & answer
    questionEl.textContent = question1.question;
    button1El.textContent = question1.answer1;
    button2El.textContent = question1.answer2;
    button3El.textContent = question1.answer3;
    button4El.textContent = question1.answer4;
});