function factorial(number) {
    let result = 1;
    let i = number;
    while (i >= 1) {
        result = result * number;
        i--;
    }
    return result;
}

var result = factorial(3);
console.log(result);