// create a promise
// const promise = new Promise((resolve , reject)=>{
//     // Do some async test
//     setTimeout(()=>{
//         console.log('Async task complete');
//         resolve()
//     }, 1000);
// })

const getUser = new Promise((resolve , reject)=>{
    // Do some async test
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({name: 'John' , age: 30})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})
getUser
    .then((user) => console.log(user))
    .catch((error)=> console.log(error))
    .finally((error) => console.log('Resolved or rejected'))

// promise.then(()=>{
//     console.log('Promise consumed...');
// })

console.log('hello');