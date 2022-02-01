console.log("Exercício 1 - Números de 1 a 100");

 for ( let numero = 1; numero <= 100; numero++) {
    if(numero % 3 == 0){
    console.log("fizz");
    }
    if (numero % 5 == 0){
    console.log("Buzz");
    }
    if ((numero % 3 == 0) && (numero % 5 == 0)){
    console.log("FizzBuzz");
    }
    if (numero % 3 != 0 && numero % 5 != 0){
    console.log(numero); }
 }

