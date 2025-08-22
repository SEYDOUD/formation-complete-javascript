const d = new Date(2023 , 1 , 10 , 8 , 0 , 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('It is not Jan , Feb or March');
}

switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}