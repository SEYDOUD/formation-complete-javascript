// fetch('https://tools-httpstatus.pickup-services.com/200')
//     .then((response) => {
//         return response
//     })
//     .then(() =>{
//         console.log('success');
//     })

// fetch('https://tools-httpstatus.pickup-services.com/404')
//     .then((response) => {
//         return response
//     })
//     .then(() =>{
//         console.log('success');
//     })

// Catch works on a network error not status . WE HAVE TO DO IT MANUALLY
// Test with response.ok
fetch('http://httpstat.us/404')
    .then((response) => {
        if(!response.ok){
            throw new Error('Request failed1');
        }
        return response
    })
    .then(() =>{
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    })

// Check for specific codes
fetch('http://httpstat.us/404')
    .then((response) => {
        if(response.status === 404){
            throw new Error('Not Found');
        } else if (response.status === 500){
            throw new Error('Server Error')
        } else if (response.status !== 200){
            throw new Error('Request Failed2')
        }
        return response
    })
    .then(() =>{
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    })