const calculator = (num1 , num2 , operator) => {
    switch (true) {
        case operator == '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case operator == '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case operator == 'x':
            console.log(`${num1} x ${num2} = ${num1 * num2}`);
            break;
        case operator == '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log('Operateur n existe pas');
            break;
    }
} 

calculator(5 , 8 , '+');
calculator(5 , 8 , '-');
calculator(5 , 8 , 'x');
calculator(5 , 8 , '/');
calculator(5 , 8 , '8');