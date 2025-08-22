// Object Challenge

// Step 1
const library = [
    {
        title: 'The power of women',
        author: 'Kin',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'The Kingdom',
        author: 'Dou',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'The best chief',
        author: 'Tene',
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
]

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library)

// Step 3
const {title: firstBook} = library[0];

console.log(firstBook);

// Step 4
const st = JSON.stringify(library);

console.log(st);