// Challenge 1
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        phone: '1111-1111-1111',
        age: 30
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'janepoe@gmail.com',
        phone: '2222-2222-2222',
        age: 25
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bobfoe@gmail.com',
        phone: '3333-3333-3333',
        age: 45
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sarasoe@gmail.com',
        phone: '4444-4444-4444',
        age: 19
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'josekoe@gmail.com',
        phone: '5555-5555-5555',
        age: 23
    },
]

const youngPeople = people
    .filter((youngPeople)=> youngPeople.age < 25)
    .map((peopleObject) => ({
        name: peopleObject.firstName +' '+peopleObject.lastName,
        email: peopleObject.email
    }))
console.log(youngPeople);

// Challenge 2
const numbers = [2 , -30 , 50 , 20 , -12 , -9 , 7]

const positiveSum = numbers
    .filter(number => number >= 0)
    .reduce((acc , cur) => acc + cur , 0)

console.log(positiveSum);

// Challenge 3
const words = ['coders' , 'programmer' , 'developer'];

const capitalizeWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))

console.log(capitalizeWords);