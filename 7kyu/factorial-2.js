// Link to challenge: https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Description: Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// My solution:

function factorial(n){
    let ans = 1;
    for (let i=2; i<=n; i++){
      ans *= i;
    }
    return ans;
}