const url = require('url')
const queryString = require('querystring')

// url.parse()
const myUrl = url.parse('https://example.com.listing?id=1000&premium=true') ;
console.log(myUrl);

// url.format()
const myUrl2 = url.format({
    protocol: 'https',
    host: 'www.example.com',
    pathname: 'listing',
    query: {
        id: 1000,
        premium: true
    }
})

console.log(myUrl2);

// querystring.parse()
const myQs = 'year=2023&month=january&day=20'

const q = queryString.parse(myQs)

console.log(q);
console.log(q.month);

// querystring.stringify()
const myQs2 = queryString.stringify({
    year: 2023,
    month: 'january',
    day: 20
})
console.log(myQs2);