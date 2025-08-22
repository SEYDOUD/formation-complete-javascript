const x = 100;
const foo = 1;
var bar = 2;

if(true){
    const y = 200;
    console.log(x+y);
}

// console.log(x+y); Wont work

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// console.log(i);

if(true){
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c); // b and a are block scope but var is function scoped

function run(){
    var d = 100;
    console.log(d + bar);
}

run();

// console.log(d); error var is function scoped