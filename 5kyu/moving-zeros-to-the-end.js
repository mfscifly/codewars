// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My soluton:

function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

// My alternate solution:

function moveZeros(arr) {
    arr.forEach(i => {
      if (i === 0){
        arr.splice(arr.indexOf(i),1);
        arr.push(0);
      }
    });
    return arr;
}