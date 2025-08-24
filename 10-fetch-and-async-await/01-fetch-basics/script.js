// Instead of standard promises that take in parameters resolve and reject , in the fetch we have just response
// Fetching a JSON file
fetch('./movies.json')
    .then( res => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })

// Fetching a text file
fetch('./test.txt')
    .then( res => {
        return res.text();
    })
    .then((data) => {
        console.log(data);
    })

// Fetching from an API
fetch('https://api.github.com/users/SEYDOUD')
    .then( res => {
        return res.json()
    })
    .then((data) => {
        document.querySelector('h1').textContent = "hello "+data.login
    })