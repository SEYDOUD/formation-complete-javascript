let x;

const name = 'John';
const age = 30;

x = 'Hello , my name is ' + name + ' and I am ' + age + ' years old'

// Template Literals
x = `Hello , my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('o')

x = s.substring(0 , 5)

x = s.substring(7)

x = s.slice(-11)

x = '        Hello world'
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

// Utiliser la version primitive
x = s.valueOf();

x = s.split('');

console.log(x);