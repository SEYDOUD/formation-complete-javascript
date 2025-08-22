let firstName = 'John';
let lastName = 'Doe';

console.log(firstName , lastName);

let age = 30

age = 31;

console.log(age);

// Usecase avec let
let score;

score = 1;

console.log(score);

if(true){
    score = score + 1
}

console.log(score)

// Usecase avec const
const x = 100;

// const score1; impossible

// const arr = [1 , 2 , 3 , 4 , 5]; impossible
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad'
};

person.name = 'John';

person.email = 'brad@gmail.com';

// declare multiple values once
let a , b , c ;
const d = 10 , e = 20 , f = 30;