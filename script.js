document.addEventListener('DOMContentLoaded', () => {
    const joke = document.getElementById('joke');
    const jokePunchline = document.getElementById('punchline');
    const nextbtn = document.getElementById('nextbtn');
    
    async function fetchJoke(){
        const url = "https://official-joke-api.appspot.com/random_joke"
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Response status : ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            displayJoke(data);
            
        } catch (error) {
            displayError();
        }
    }

    nextbtn.addEventListener('click',()=>{
        fetchJoke();
    });

    function displayJoke(data){
        joke.innerHTML = data.setup;
        jokePunchline.innerHTML = data.punchline;
    }

    fetchJoke();
    
    function displayError(){
        joke.innerHTML = `OOPs!, Server isn't responding`;
        jokePunchline.innerHTML = `Please try again later...`;
    }
});
