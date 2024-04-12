// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// My refactored solution:

function sortArray(array) {
    let odds = array.filter(num => num%2 !== 0).sort((a,b) => a-b);
    return array.map(num => num%2 === 0 ? num : odds.shift());
}

// My original solution:

function sortArray(array) {
    // create a new array of odd numbers
      let odds =[];
      for (let i=0;i<array.length;i++){
        if (array[i]%2 !== 0){
          odds.push(array[i])
        }
      }
    // sort the new array
      odds.sort((a,b)=>a-b);
    // create a new array, replacing the odds
      return array.map(num => num%2 === 0 ? num : odds.shift());
}