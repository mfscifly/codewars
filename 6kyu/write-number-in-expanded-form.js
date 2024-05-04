// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My refactored solution:

function expandedForm(num) {
    return num.toString()
              .split('')
              .reverse()
              .map((a,i) => a*Math.pow(10,i))
              .filter(x => x>0)
              .reverse()
              .join(' + ');
}

// Alternate solution:

function expandedForm(num) {
    return num.toString()
              .split('')
              .map((number,index,arr) => number+'0'.repeat(arr.length-index-1))
              .filter(number => Number(number)>0)
              .join(' + ');
}

// Original solution:

function expandedForm(num) {
    let numArr = num.toString().split('');
    let digits = numArr.length;
    let result = '';
    numArr.forEach((number, index) => {
      if (index === 0) {
        result += `${number}` + '0'.repeat(digits-index-1);
      } else if (number > 0){
        result += ` + ${number}` + '0'.repeat(digits-index-1) ;
      }
    });
    return result;
}
