//function declaration
function getSumOdd(numbers) {
    // console.log(numbers);
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        sum = sum + numbers[i];
    }
    return sum;
}

//array declaration
var arr = [10, 12, 13, 14, 24, 23, 25];

//function call and send parameter
var sum = getSumOdd(arr);
console.log(sum);