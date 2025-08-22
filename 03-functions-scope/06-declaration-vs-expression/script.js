console.log(addDollarSign(100)); // mettre les declaration de variables et de fonction pour que ca séxecute avant le code c'est le hookesting
console.log(addPlusSign(200));
// Function Declaration
function addDollarSign(value){
    return '$'+ value
}


// Function Expression
const addPlusSign = function(value){
    return '+' + value;
};
