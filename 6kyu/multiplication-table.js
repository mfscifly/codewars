// Link to challenge: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// My refactored solution:

multiplicationTable = function(size) {
    var result = [];
    for (let i = 0; i < size; i++) {
      result[i] = [];
      for(let j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    return result
}

// My original solution:

multiplicationTable = function(size) {
    let table = new Array(size).fill(0);
    table.forEach ((row,index) => table[index] = new Array(size).fill(0));
    table.forEach((row,index) => {
        for (let i=0; i<size; i++){
            row[i] += (index+1)*(i+1);
        }
    })  
   return table;
}