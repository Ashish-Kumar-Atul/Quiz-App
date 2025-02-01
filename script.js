document.addEventListener('DOMContentLoaded',()=>{

    const startbtn = document.getElementById('start');
    const nextbtn = document.getElementById('next');
    const submitbtn = document.getElementById('submit');
    const quescontainer = document.getElementById('quesContainer');
    const showquestions = document.getElementById('questions');
    const options = document.getElementById('options');
    
    const questions = [
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
        },
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

    startbtn.addEventListener('click',() => {
        startbtn.classList.add('hidden');
        nextbtn.classList.remove('hidden');

    })
})
