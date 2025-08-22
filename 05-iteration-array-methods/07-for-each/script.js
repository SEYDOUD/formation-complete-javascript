const socials = ['Twitter' , 'Linkedin' , 'Facebook' , 'Instagram'];

// console.log(socials.__proto__);

socials.forEach( (item , index , arr) => console.log(`${index} - ${item}`) );

function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    {name : 'Twitter' , url : 'www.twitter.com'},
    {name : 'Facebook' , url : 'www.facebook.com'},
    {name : 'Linkedin' , url : 'www.linkedin.com'},
    {name : 'Instagram' , url : 'www.instagram.com'},
];

socialObjs.forEach((item)=> console.log(item.url))