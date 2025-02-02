document.addEventListener('DOMContentLoaded', () => {
    const startbtn = document.getElementById('start');
    const nextbtn = document.getElementById('next');
    const submitbtn = document.getElementById('submit');
    const restartbtn = document.getElementById('restart');
    const quescontainer = document.getElementById('quesContainer');
    let showquestions = document.getElementById('questions');
    let options = document.getElementById('options');

    const questionsarr = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            answer: "William Shakespeare",
        },
        {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Pb", "Fe"],
            answer: "Au",
        }                     //Add a comma while uncommenting rest code
        // {
        //     question: "Which country is known as the Land of the Rising Sun?",
        //     choices: ["China", "Japan", "Thailand", "South Korea"],
        //     answer: "Japan",
        // },
        // {
        //     question: "What is the smallest prime number?",
        //     choices: ["0", "1", "2", "3"],
        //     answer: "2",
        // },
        // {
        //     question: "Which element has the atomic number 1?",
        //     choices: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        //     answer: "Hydrogen",
        // },
        // {
        //     question: "What is the capital of Australia?",
        //     choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        //     answer: "Canberra",
        // },
        // {
        //     question: "In which year did the Titanic sink?",
        //     choices: ["1912", "1905", "1898", "1920"],
        //     answer: "1912",
        // }
    ];

    let currentQuestion = 0;
    let score = 0;

    startbtn.addEventListener('click', startQuiz);
    nextbtn.addEventListener('click', nextQuestion);
    submitbtn.addEventListener('click', showScore);
    restartbtn.addEventListener('click', restartQuiz);

    function startQuiz() {
        startbtn.classList.add('hidden');
        nextbtn.classList.remove('hidden');
        showQuestions();
    }

    function showQuestions() {
        if (currentQuestion < questionsarr.length) {
            showquestions.textContent = questionsarr[currentQuestion].question;
            options.innerHTML = '';

            questionsarr[currentQuestion].choices.forEach(choice => {
                const li = document.createElement('li');
                li.innerHTML = `<label><input type="radio" name="option" value="${choice}" class="mr-2"> ${choice}</label>`;
                options.appendChild(li);
            });
        } else {
            showScore();
        }
    }

    function nextQuestion() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        if (selectedOption.value === questionsarr[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion === questionsarr.length - 1) {
            nextbtn.classList.add('hidden');
            submitbtn.classList.remove('hidden');
        }

        showQuestions();
    }

    function showScore() {
        quescontainer.innerHTML = `<h2 class="text-2xl font-bold">Your Score: ${score} / ${questionsarr.length}</h2>`;
        submitbtn.classList.add('hidden');
        nextbtn.classList.add('hidden');
        restartbtn.classList.remove('hidden');
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
    
        restartbtn.classList.add('hidden');
        submitbtn.classList.add('hidden');
        nextbtn.classList.remove('hidden');
    
        quescontainer.innerHTML = `
            <h2 id="questions" class="text-2xl"></h2>
            <ul id="options" class="pl-5 mt-4 text-xl text-left"></ul>
        `;
    
        showquestions = document.getElementById('questions');
        options = document.getElementById('options');
    
        showQuestions();
    }
    
});
