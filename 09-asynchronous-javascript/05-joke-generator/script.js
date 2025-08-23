const button = document.querySelector('#joke-btn')
const joke = document.querySelector('#joke')

const xhr = new XMLHttpRequest();

function loadJoke(){
    xhr.open('GET' , 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            joke.innerText = JSON.parse(this.response).value
        }
    }
    xhr.send()
}

button.addEventListener('click' , loadJoke)
