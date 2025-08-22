const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'pink',
    color4: 'orange',
    color5: 'green',
};

for (const key in colorObj){
    console.log(key , colorObj[key]);
}

const colorArr = ['red' , 'green' , 'blue' , 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}