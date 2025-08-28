const getUsers = async () => {
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await fetch('https://tools-httpstatus.pickup-services.com/404')

        if(!res.ok){
            throw new Error('Request failed')
        }

        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const getPosts = async () => {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await fetch('https://tools-httpstatus.pickup-services.com/404')

        if(!res.ok){
            throw new Error('Request failed')
        }

        const data = await res.text()
        console.log(data);
}

// getUsers()
getPosts().catch(error => console.log(error))