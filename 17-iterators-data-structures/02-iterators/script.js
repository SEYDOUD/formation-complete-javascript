// Not Iterable
// const app = {
//     nexIndex: 0,
//     teams: ['Red sox' , 'Yankees' , 'Astros' , 'Dodgers'],
//     next(){
//         if (this.nexIndex >= this.teams.length){
//             return { done: true }
//         }

//         const returnValue = { value: this.teams[this.nexIndex], done: false }
//         this.nexIndex++
//         return returnValue
//     }
// }

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

// Iterable
const app = {
    teams: ['Red Sox' , 'Yankees' , 'Astros' , 'Dodgers'],
    [Symbol.iterator]: function () {
        let nexIndex = 0;
        return {
            next: () => {
                return nexIndex < this.teams.length
                ? { value: this.teams[nexIndex++], done: false }
                : { done: true }
            }
        }
    }
}

const iterator = app[Symbol.iterator]()
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

for(const team of app){
    console.log(team);
}