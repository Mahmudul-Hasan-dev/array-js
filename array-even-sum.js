//function declaration
function getSum(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function getEven(numbers) {
    var even = [];
    //for loop to check every element in array

    for (let i = 0; i < numbers.length; i++) {

        // we can keep array element to another variable to keep it clean
        var index = i;
        var number = numbers[index];

        if (number % 2 == 0) {
            // console.log(numbers[i]);
            even.push(number);
        }
    }
    return even;
}

//array declaration
var arr = [10, 12, 12, 14, 24, 23, 25];

//function call and send parameter
var myEvenNumbers = getEven(arr);
// console.log(myOddNumbers);
var sumEven = getSum(myEvenNumbers);
console.log(sumEven);