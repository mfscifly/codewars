// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// my solution [less code]

function SeriesSum(n){
    let sum = 0;
    for (let i = 0; i<n; i++){
        sum += 1/(3*i+1)
    }
    return sum.toFixed(2);
}

// alternate solution [more code]

function SeriesSum(n){
    let series = [];
    for (let i=1; i<=n; i++){
      if (i===1){
        series.push(1.00)
      } else if (i===2){
        series.push(.25);    
      } else {
        series.push(1/(4+((i-2)*3)));
      }
    }
    let answer = series.reduce((acc,cV)=>acc+cV,0).toFixed(2);
    return answer.toString();
  }

