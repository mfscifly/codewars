// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// My refactored solution:

function rowSumOddNumbers(n) {
    return n*n*n;
}

// My original solution:

function rowSumOddNumbers(n) {
    let start = (n*(n-1))+1;
    let array = [start]
    for (let i=1; i<n; i++){
      array.push(start+=2);
    }  
    return array.reduce((acc,cV)=>acc+cV,0);
}