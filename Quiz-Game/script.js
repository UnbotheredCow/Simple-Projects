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
const progressBar = document.getElementById("progres");

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


