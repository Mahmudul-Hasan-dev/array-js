function factorial(number) {
    let result = 1;
    //in multiplication loop should be started from 1
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

var myNumber = 4;
var total = factorial(myNumber);
console.log(total);