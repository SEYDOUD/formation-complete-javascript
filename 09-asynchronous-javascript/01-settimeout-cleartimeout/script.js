// setTimeout(changeText , 2000);

function changeText(){
    document.querySelector('h1').textContent = 'Hello from callBack';
}

const timerID = setTimeout(changeText , 3000);

document.querySelector('#cancel').addEventListener('click' , ()=>{
    console.log(timerID);
    clearTimeout(timerID)
    console.log('Timer canceled');
})