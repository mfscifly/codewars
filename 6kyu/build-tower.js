// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// My solution:

function towerBuilder(nFloors) {
    let tower = [];
    for (let i=0; i<nFloors; i++){
      tower.push(' '.repeat(nFloors-i-1)
                 +'*'.repeat(1+(i*2))
                 +' '.repeat(nFloors-i-1)
      );
    }
    return tower;
}
