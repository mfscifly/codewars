// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// My refactored solution:

function sumDigits(number) {
    return Math.abs(number).toString().split('').map(Number).reduce((acc,cV)=>acc+cV,0)
}

// My original solution:

function sumDigits(number) {
    let arr = number.toString().split('');
    if (isNaN(arr[0]) ){
        arr.shift();
    }
    return arr.reduce((acc,cV) => Number(acc)+Number(cV),0);
}