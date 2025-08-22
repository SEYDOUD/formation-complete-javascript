// ||= assigns the right side value only if the left is a falsy value

let a = false;

// la version longue
if (!a){
    a = 10;
}

// a = a || 10 : la version un peu plus longue
a ||= 10


// &&= assigns the right side value if the left is a truthy value

let b = 10;

if (b) {
    b = 20
}

console.log(b);

b = b && 20;

b &&= 20

// ??= assigns the right side value only if the left is null of undefined

let c = null;

if (c == null || c == undefined){
    c = 20;
}

c = c ?? 20

c ??= 20;

console.log(c);