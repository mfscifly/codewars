// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// my solution (long):

function arrayDiff(a, b) {
    for (let i=0;i<Math.max(a.length,b.length);i++){
      if (b.includes(a[i])){
        a.splice(i,1);
        i--;
      }
    }
    return a;
  }

// my solution (short):

function arrayDiff(a,b){
    return a.filter(num=>!b.includes(num));
}