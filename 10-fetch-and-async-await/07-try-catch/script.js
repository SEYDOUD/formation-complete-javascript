// try {
//     console.log(x);
// } catch (e) {
//     console.log(e);
// }

function double(number) {
    if(isNaN(number)){
        throw new Error(number+' is not a number')
    }

    return number * 2
}

try {
    const y = double("dd")
    console.log(y);
} catch (error) {
    console.log(error);
}