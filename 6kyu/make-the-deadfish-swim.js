// Link to challenge: https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// My solution:

function parse(data){
    let result = [];
    let value = 0;
    data = data.toString().split('');
    data.forEach(n => {
        switch (n){
            case 'i':
                value ++;
                break;
            case 'd':
                value --;
                break;
            case 's':
                value = value*value;
                break;
            case 'o':
                result.push(value)
                break;
        }  
    });
    return result;
}
  