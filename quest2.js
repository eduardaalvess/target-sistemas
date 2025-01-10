function sequenFibonacci(numero) {
    let a = 0, b = 1;
    
    if (numero === a || numero === b) {
        return true;
    }
    
    while (b < numero) {
        let temp = b;
        b += a;
        a = temp;
    }
    
    return b === numero;
}

let numero = 1; 
if (sequenFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}