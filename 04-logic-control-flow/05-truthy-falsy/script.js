// const email = 'test@test.com'

// if(email){
//     console.log('You passed in an email');
// }

// console.log(Boolean(email));

// Falsy Values
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

// Truthy values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = false;

if (x) {
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 2;

if (children !== undefined){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post one' , 'Post two'];

if(posts.length > 0){
    console.log('List Posts');
}else{
    console.log('No posts');
}

// Checking for empty objects
const user = {
    name:'Brad'
}

if (Object.keys(user).length > 0){
    console.log('List user');
}else{
    console.log('No user');
}

// Loose equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);