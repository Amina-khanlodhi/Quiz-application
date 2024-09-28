// const questions = [
//     {
//         question: "What does HTML stand for?",
//         answers: [
//             { text: "Hypertext Markup Language", correct: true },
//             { text: "Hyper Tool Markup Language", correct: false },
//             { text: "Hypertext Machine Language", correct: false },
//             { text: "Hyperlinking Text Markup Language", correct: false },
//         ],
//     },
//     {
//         question: "Which language is used for web styling?",
//         answers: [
//             { text: "HTML", correct: false },
//             { text: "CSS", correct: true },
//             { text: "JavaScript", correct: false },
//             { text: "Python", correct: false },
//         ],
//     },
//     {
//         question: "What does CSS stand for?",
//         answers: [
//             { text: "Cascading Style Sheets", correct: true },
//             { text: "Colorful Style Sheets", correct: false },
//             { text: "Computer Style Sheets", correct: false },
//             { text: "Creative Style Sheets", correct: false },
//         ],
//     },
//     {
//         question: "Which of these is a JavaScript framework?",
//         answers: [
//             { text: "React", correct: true },
//             { text: "Django", correct: false },
//             { text: "Laravel", correct: false },
//             { text: "Flask", correct: false },
//         ],
//     },
//     {
//         question: "What is the output of `console.log(typeof [])` in JavaScript?",
//         answers: [
//             { text: "object", correct: true },
//             { text: "array", correct: false },
//             { text: "null", correct: false },
//             { text: "undefined", correct: false },
//         ],
//     },
//     {
//         question: "Which of the following is NOT a programming language?",
//         answers: [
//             { text: "Python", correct: false },
//             { text: "Java", correct: false },
//             { text: "HTML", correct: true },
//             { text: "Ruby", correct: false },
//         ],
//     },
//     {
//         question: "Which company developed JavaScript?",
//         answers: [
//             { text: "Netscape", correct: true },
//             { text: "Microsoft", correct: false },
//             { text: "Apple", correct: false },
//             { text: "Sun Microsystems", correct: false },
//         ],
//     },
//     {
//         question: "Which one of these is a backend framework?",
//         answers: [
//             { text: "Angular", correct: false },
//             { text: "Django", correct: true },
//             { text: "React", correct: false },
//             { text: "Vue", correct: false },
//         ],
//     },
//     {
//         question: "What is the most commonly used language for web development?",
//         answers: [
//             { text: "Python", correct: false },
//             { text: "JavaScript", correct: true },
//             { text: "Java", correct: false },
//             { text: "C++", correct: false },
//         ],
//     },
//     {
//         question: "Which of the following is NOT a JavaScript data type?",
//         answers: [
//             { text: "String", correct: false },
//             { text: "Boolean", correct: false },
//             { text: "Number", correct: false },
//             { text: "Character", correct: true },
//         ],
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// const questionContainer = document.getElementById("question-container");
// const questionElement = document.getElementById("question");
// const answerButtons = document.querySelectorAll(".answer");
// const nextButton = document.getElementById("next-btn");
// const resultContainer = document.getElementById("result-container");
// const resultMessage = document.getElementById("result-message");
// const progressBar = document.getElementById("progress-bar");

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.classList.add("hide");
//     resultContainer.classList.add("hide");
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = currentQuestion.question;
//     answerButtons.forEach((button, index) => {
//         const answer = currentQuestion.answers[index];
//         button.innerText = answer.text;
//         button.onclick = () => selectAnswer(answer.correct, button);
//     });
//     progressBar.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + '%';
// }

// function resetState() {
//     answerButtons.forEach(button => {
//         button.classList.remove("correct", "wrong");
//         button.disabled = false;
//     });
// }

// function selectAnswer(isCorrect, button) {
//     if (isCorrect) {
//         button.classList.add("correct");
//         score++;
//     } else {
//         button.classList.add("wrong");
//     }
//     answerButtons.forEach(btn => btn.disabled = true)
//     }

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyper Tool Markup Language", correct: false },
            { text: "Hypertext Machine Language", correct: false },
            { text: "Hyperlinking Text Markup Language", correct: false },
        ],
    },
    {
        question: "Which programming language is used to style web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false },
        ],
    },
    {
        question: "What is the most used programming language in 2024?",
        answers: [
            { text: "Python", correct: true },
            { text: "JavaScript", correct: false },
            { text: "C++", correct: false },
            { text: "Ruby", correct: false },
        ],
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Django", correct: false },
            { text: "Flask", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progress-bar");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove("hide");
    resultContainer.classList.add("hide");
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        const answer = currentQuestion.answers[index];
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(answer.correct, button);
    });
    progressBar.style.width = ((currentQuestionIndex + 1) / questions.length) * 100 + '%';
}

function resetState() {
    answerButtons.forEach(button => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function selectAnswer(isCorrect, button) {
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    answerButtons.forEach(btn => btn.disabled = true);
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove("hide");
    } else {
        showResults();
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.classList.add("hide");
    }
});

function showResults() {
    questionContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultMessage.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.classList.add("hide");
}

document.getElementById("restart-btn").addEventListener("click", () => {
    questionContainer.classList.remove("hide");
    resultContainer.classList.add("hide");
    startQuiz();
});

startQuiz();
