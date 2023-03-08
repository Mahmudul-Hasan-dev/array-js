function factorial(number) {
    let result = 1;
    var i = 1;
    while (i <= number) {
        result = result * number;
        i++;
    }
    return result;
}
var num = 4;
var factorialResult = factorial(num);
console.log(factorialResult)