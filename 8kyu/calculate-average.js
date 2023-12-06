// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//my solution:

function findAverage(array) {
    if (array.length === 0){
      return 0;
    } else {
      return (array.reduce((acc, cV) => acc+cV,0)/array.length);
    }
  }

  // OR

  function findAverageTwo(array){
    return array.length === 0 ? 0 : array.reduce((acc, cV)=>acc+cV,0)/array.length;
}