const myMap = new Map()

myMap.set('name' , 'John')
myMap.set(1 , 'blue')
myMap.set(2 , 'red')

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2)

console.log(myMap);

const peopleMap = new Map()
peopleMap.set('papi' , {phone: '555-555-555' , email: 'papi@gmail.com'})
peopleMap.set('seydou' , {phone: '666-666-666' , email: 'seydou@gmail.com'})
peopleMap.set('doudou' , {phone: '777-777-777' , email: 'doudou@gmail.com'})

peopleMap.forEach((person) => console.log(person.email))

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap)
console.log(peopleArray);