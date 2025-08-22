let x , y , sumOutput , differenceOutput , productOutput , quotientOutput , rmOutput;

x = Math.floor((Math.random() * 100) + 1);
y = Math.floor((Math.random() * 50) + 1);

sumOutput = `${x} + ${y} = ${x + y}`;
differenceOutput = `${x} - ${y} = ${x - y}`;
productOutput = `${x} * ${y} = ${x * y}`;
quotientOutput = `${x} / ${y} = ${x / y}`;
rmOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput +'\n'+differenceOutput+'\n'+productOutput+'\n'+quotientOutput+'\n'+rmOutput);