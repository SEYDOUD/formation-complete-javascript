// Challenge 1
((temperature) => console.log((temperature - 32)*(5/9)))(34);

// Challenge 2
const minMax = (...numbers) => ({min: Math.min(...numbers) , max: Math.max(...numbers)});
console.log(minMax(1 , 2 , 3 , 4 , 5 , 89));

// Challenge 3
((l , w) => console.log(`The area of the rectangle with length ${l} and width ${w} is ${w*l}`))(10 , 25);