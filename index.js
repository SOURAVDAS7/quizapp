const quizData = [{
        question: "What is the president's name of India ?",
        a: "Narendra Modi",
        b: 'Sonia Gandhi',
        c: 'APJ abdul Kalam',
        d: "Ram Nath Kovind",
        correct: 'd',
    },
    {
        question: "Who has won the highest number of Bal'o'nder ?",
        a: 'Robert Carlos',
        b: 'Andres Iniesta',
        c: 'Lionel Messi',
        d: "Gareth Bale",
        correct: 'c',
    },
    {
        question: "Who is the writer of the novel 'The White Tiger' ?",
        a: 'Arvind Adiga',
        b: 'Chetan Bhagat',
        c: 'Rakesh Roshan',
        d: 'Priyanka Gandhi',
        correct: 'a',
    }, {
        question: "Who is the father of Biology.",
        a: 'Aristotle',
        b: 'Paltos',
        c: 'Sir Leewendoski',
        d: 'Graham bell',

        correct: 'a',
    }, {
        question: "Which Indian Ship played a very important role in Providing naval frontline of defence in the war of 1971 against Pakistan ? ",
        a: 'INS RAJPUT',
        b: 'INS VIKRANT',
        c: 'INS VIKRAM ADITYA',
        d: 'PNS GHAZI',

        correct: 'b',
    }
]

// fetch the data from the html file 

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

// };