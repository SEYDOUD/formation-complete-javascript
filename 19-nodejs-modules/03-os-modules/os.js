const os = require('os')

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

if(os.platform === 'win32'){
    console.log('You are on windows');
}else if(os.platform() === 'darwin'){
    console.log("You are on mac");
}else{
    console.log("You are on Linux");
}

// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem());

// totalmem()
console.log(os.totalmem());

// homedir
console.log(os.homedir());

// uptime
console.log(os.uptime());

const uptime = os.uptime()
const days = Math.floor(uptime / 60 / 60 / 24)
const hours = Math.floor(uptime / 60 / 60) % 24
const mins = Math.floor(uptime / 60) % 60
const seconds = Math.floor(uptime) % 60

console.log(`Uptime: ${days} days , ${hours} hours , ${mins} minutes , ${seconds} seconds`);

// hostname()
console.log(os.hostname());
