/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let num1 = 0;
    let num2 = 1;
    let sum = 0;

    if(n < 2){
        return n;
    }   

    for(let i = 2; i <= n; i++){
        sum = num1 + num2;
        num1=num2
        num2=sum
        
    }
    return sum;
}

console.log(fib(45))