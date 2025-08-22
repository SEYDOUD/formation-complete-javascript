const numbers = [ 1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 10];

// long version
// const evenNumbers = numbers.filter(function (number){
//     return number % 2 === 0;
// })

// const evenNumbers = numbers.filter( number => number % 2 === 0)

// Same with forEach
// const evenNumbers = [];

// numbers.forEach(number =>{
//     if (number % 2 === 0) 
//         evenNumbers.push(number)
// })

const companies = [
    {name: 'Company One' , category: 'Finance' , start: 1981 , end: 2004},
    {name: 'Company Two' , category: 'Retail' , start: 1992 , end: 2008},
    {name: 'Company Three' , category: 'Auto' , start: 1999 , end: 2007},
    {name: 'Company Four' , category: 'Retail' , start: 1989 , end: 2010},
    {name: 'Company Five' , category: 'Technology' , start: 2009 , end: 2014},
    {name: 'Company Six' , category: 'Finance' , start: 1987 , end: 2010},
    {name: 'Company seven' , category: 'Finance' , start: 1986 , end: 1996},
    {name: 'Company Eight' , category: 'Technology' , start: 2011 , end: 2016},
    {name: 'Company Nine' , category: 'Retail' , start: 1981 , end: 1989},
];

// Get only retail companies

const retailCompanies = companies.filter((company) => company.category === "Retail")
console.log(retailCompanies);

// Get the companies started in or after 1980 and ended before 2005

const dateCompanies = companies.filter((company) => company.start >= 1980 && company.end < 2005)
console.log(dateCompanies);

// Get companies that lasted 10 years or more

const lastedCOmpanies = companies.filter((company) => (company.end - company.start) >= 10 )

console.log(lastedCOmpanies);