// Sealing - Prevents from added , removed
// Freezing - Prevents from added , removed , changed

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10
}

Object.seal(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj)

rectObj.color = 'red'
delete rectObj.name;

rectObj.width = 20

console.log(rectObj);

const circleObj = {
    name: 'Circle 1',
    radius: 30
};

Object.freeze(circleObj)

descriptors = Object.getOwnPropertyDescriptors(rectObj)

circleObj.color = 'blue'
delete circleObj.name
circleObj.name = 'New Name'

console.log(descriptors);

console.log('rectObj is Sealed ? ',Object.isSealed(rectObj));
console.log('rectObj is Frozen ? ',Object.isFrozen(rectObj));
console.log('circleObj is Sealed ? ',Object.isSealed(circleObj));
console.log('rectObj is Frozen ? ',Object.isFrozen(circleObj));