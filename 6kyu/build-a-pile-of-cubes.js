// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n−1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 +(n−1)^3+(n−2)^3+...+1^3 = m, if such a n exists, or -1 if there is no such n.

// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// My refactored solution:

function findNb(m) {
    let arr = []
    let counter = 1;
    while (arr.reduce((acc,cV) => acc+cV, 0) < m){
      arr.push(Math.pow(counter,3));
      counter++;  
    }
    return m === arr.reduce((acc,cV) => acc+cV, 0) ? arr.length : -1; 
}

// My original solution:


function findNb(m) {
    let arr = []
    let counter = 1;
    while (arr.reduce((acc,cV) => acc+cV, 0) < m){
      arr.push(Math.pow(counter,3));
      counter++;  
    }
    if (arr.reduce((acc,cV) => acc+cV, 0) === m){
      return arr.length;
    }
    return -1;
}