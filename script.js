
var start = document.getElementById("firstDiv");
var quiz = document.getElementById("mainDiv");
var scores = document.getElementById("scoreDiv");
var ques = document.getElementById("question")
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var totalScore = document.getElementById("totalScore");
var seconds = 60 ;

const questions = [
    {
        question: "What is  a binary variable, having two possible values called “true” and “false”?",
        answer1: "String",
        answer2: "Boolean",
        answer3: "Object",
        answer4: "Number",
        correct: "1"
    },
    {
        question: "A ______ can be any text inside double or single quotes?",
        answer1: "Object",
        answer2: "Number",
        answer3: "Boolean",
        answer4: "String",
        correct: "4"
    },
    {
        question: "_______ can be written with or without decimals?",
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Functions",
        answer4: "Numbers",
        correct: "4"
    },
    {
        question: "A JavaScript ______ is a block of code designed to perform a particular task?",
        answer1: "Object",
        answer2: "Boolean",
        answer3: "Function",
        answer4: "String",
        correct: "3"
    },
    {
        question: "JavaScript ______ are used to store multiple values in a single variable.?",
        answer1: "Functions",
        answer2: "Arrays",
        answer3: "Booleans",
        answer4: "Objects",
        correct: "2"
    },
]


var lastQuestion = questions.length-1;
var runningQuestion = 0;


function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<h3>" + q.question + "</h3>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}
var startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startQuiz)

function countDown() {
    var timeLeft = document.getElementById("timer")
    var x = setInterval(function() {
        seconds--;
        var secondsString = seconds.toString();
        timeLeft.innerText = secondsString;
        if (seconds <= 0) {
            clearInterval(x);
            alert("TOO SLOW!!")
        } else if (lastQuestion === runningQuestion){
            clearInterval(x)
        }
    }, 1000);
}

function  startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block"
    countDown();
    }

function checkAnswer(answer) {
    if (answer == questions [runningQuestion].correct) {
        console.log("correct!");
    } else {
        seconds -= 10;
        console.log("incorrect");
    }
    count = 0
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else 
    scoreRender();
}
function correctAnswer() {
    document.getElementById()
}


function scoreRender() {
    quiz.style.display = "none"
    scoreDiv.style.display = "block";
    totalScore.innerHTML = "Your final score is " + seconds;
}


var userInitals = document.getElementById("user-initials");
var submitScore = document.getElementById("submitScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

submitScore.addEventListener("click", function(submitScore){
    event.preventDefault();

    var user = {
        initials: userInitals.value.trim(),
        score: seconds,
    }
    console.log(user)
    highScores.push(user);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores)
    window.location="index2.html";
    
    
})



  