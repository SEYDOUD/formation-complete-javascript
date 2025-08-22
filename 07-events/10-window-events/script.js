
// window.onload = ()=>{
//     document.querySelector('h1').textContent = 'Hello World';
// }

window.addEventListener(
    'load' , 
    () => console.log('Page Loaded')
);

window.addEventListener(
    'DOMContentLoaded',
    () => console.log('DOMLoaded')
)

console.log('Run me');


window.addEventListener('resize' , ()=>{
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll' , ()=>{
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if(window.scrollX > 70){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
})

window.addEventListener('focus' , ()=>{
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    });
})