const d = new Date(2023 , 10 , 30 , 20 , 0 , 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good Night');
}

// Nested If

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake up');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');

    if (hour >= 20) {
        console.log('zzzzzzzzzzzz');
    }
}

if (hour >= 7 && hour < 15) {
    console.log('This is work Time');
}

if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
}