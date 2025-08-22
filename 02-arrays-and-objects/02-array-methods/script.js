let x;

const arr = [34 , 55 , 95 , 20 , 15];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(20);

x = arr.indexOf(340);

x = arr.slice(1 , 3);

// ressemble a slice sauf que splice prend le nombre d element au lieu de l index en second parametre
// x = arr.splice(1 , 3);

// x = arr.splice(3 , 1);

x = arr.splice(1 , 4).reverse().toString().charAt(0);

console.log(x);