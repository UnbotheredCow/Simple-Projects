// SCREENS
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// BUTTONS
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

// QUIZ TEXT AND INFO
const questionText = document.getElementById("questionText");
const currentQuestion = document.getElementById("currentQuestion");
const totalQuestion = document.getElementById("totalQuestion");
const scoreElement = document.getElementById("Score");

// ANSWERS
const answerContainer = document.getElementById("answerContainer");

// PROGRESS BAR
const progressBar = document.getElementById("progress");

// RESULT
const correctAnswers = document.getElementById("correctAnswers");
const maxScore = document.getElementById("maxScore");
const resultMessage = document.getElementById("resultMessage");


//QUESTIONS
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which programming language is primarily used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        answers: [
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
            { text: "Japan", correct: true },
            { text: "UK", correct: false }
        ]
    },
    {
        question: "Which data structure follows FIFO?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    }
];

// QUIZ STATE VARIABLES

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false

totalQuestion.textContent = quizQuestions.length
maxScore.textContent = quizQuestions.length


//EVENT LISTNERS
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    //Reset Vars
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score

    startScreen.classList.remove("active")
    quizScreen.classList.add("active")  

    showQuestion()
}

function restartQuiz(){
    resultScreen.classList.remove("active")
    startQuiz()
}

function showQuestion(){
    //RESET STATE
    answersDisabled = false

    const questionData = quizQuestions[currentQuestionIndex];
    currentQuestion.textContent = currentQuestionIndex + 1;
    const progresPercent = (currentQuestionIndex/quizQuestions.length)*100;

    progressBar.style.width = progresPercent + "%"
    questionText.textContent = questionData.question

    answerContainer.innerHTML = "";

    questionData.answers.forEach(answers => {
        const button = document.createElement("button")
        button.textContent = answers.text
        button.classList.add("answerButton")

        button.dataset.correct = answers.correct

        button.addEventListener("click", selectAnswer);
        answerContainer.appendChild(button)
    })
}

function selectAnswer(event){
    if(answersDisabled == true) return

    answersDisabled = true
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answerContainer.children).forEach(button => {
        if(button.dataset.correct == 'true'){
            button.classList.add("correct")
        }
        else if (button === selectedButton){
            button.classList.add("incorrect")
        }
    })

    if(isCorrect){
        score++;
        scoreElement.textContent = score;

    }

    setTimeout(()=>{
        currentQuestionIndex++;
        //CHECK FOR MORE QUESTION
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion();
        }else{
            showResult()
        }
    }, 1000)
}

function showResult(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    correctAnswers.textContent = score;
    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "You are a GENIUS!!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Excellent work! You're really smart";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good job! You know your stuff";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Keep practicing";
    } else if (percentage >= 20) {
        resultMessage.textContent = "You can do better! Try again";
    } else {
        resultMessage.textContent = "Oof!! Time to study and retry!";
    }

}

