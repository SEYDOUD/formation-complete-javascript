// alert("Hello");
// console.log(innerWidth);

const x = 100;

console.log(x , 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x , 'in function');
}

run();

if(true){
    console.log(x , 'in block');
}

function add(){
    const x = 1; // il override le x global scope , cést ce qu'on appelle variable shadowing
    const y = 50;
    console.log(x + y);
}

// console.log(y) : ne marchera pas because is function scope

add();