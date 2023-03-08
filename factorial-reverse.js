function factorial(number) {
    let result = 1;
    for (i = number; i >= 1; i--) {
        result = result * number;
    }
    return result;
}
let myNumber = 5;
let factorialResult = factorial(myNumber);
console.log(factorialResult);