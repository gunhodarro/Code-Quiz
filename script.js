const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var introinstructions = document.getElementById('intro')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    
    startButton.classList.add('hide')
    introinstructions.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        var para = document.createElement("P");
    para.innerText = "Correct!";
    document.body.appendChild(para)
    } else {
        element.classList.add('wrong')
        var para = document.createElement("P");
    para.innerText = "Wrong!";
    document.body.appendChild(para);
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function myFunction() {
    var para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    document.body.appendChild(para);
  }

const questions = [
    {
        question: 'What is  a binary variable, having two possible values called “true” and “false.”.?',
        answers: [
            { text: 'boolean', correct: true},
            { text: 'string', correct: false},
            { text: 'number', correct: false},
            { text: 'object', correct: false }
        ]
    },
    {
        question: 'A ______ can be any text inside double or single quotes?',
        answers: [
            { text: 'object', correct: false},
            {text: 'number', correct: false },
            {text: 'boolean', correct: false },
            {text: 'string', correct: true }
        ]
    },
    {
        question: '_______ can be written with or without decimals?',
        answers: [
            { text: 'boolean', correct: false},
            {text: 'numbers', correct: true },
            {text: 'string', correct: false },
            {text: 'function', correct: false }
        ]
    },
    {
        question: 'A JavaScript ______ is a block of code designed to perform a particular task?',
        answers: [
            { text: 'object', correct: false},
            {text: 'boolean', correct: false },
            {text: 'function', correct: true },
            {text: 'string', correct: false }
        ]
    },
    {

        question: 'JavaScript ______ are used to store multiple values in a single variable.?',
        answers: [
            { text: 'functions', correct: false},
            {text: 'numbers', correct: false },
            {text: 'arrays', correct: true },
            {text: 'booleans', correct: false }
        ]
    }
]