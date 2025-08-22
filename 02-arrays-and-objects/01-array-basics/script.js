let x;

// Array Litteral
const numbers = [ 12 , 13 , 41 , 4 , 18];
const mixed = [12 , 'Hello' , true , null];

// Array Constructor
const fruits = new Array('apple' , 'grape' , 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

fruits[2] = 'pear';

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry'

x = fruits;

console.log(x)