function first(){
    const x = 100;

    function second(){
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); le parent ne peut pas acceder aux variables de la fille

    second();
}
first();

if(true){
    const x = 100;

    if(x === 100){
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); impossible d'access
}