// Link: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// My solution:

function rgb(r, g, b) {
    let hex = '';
    let rgb = [r,g,b];
    let alphas = {
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
    };
    rgb.forEach(num => {
        if (num < 0){
            hex += '00';
        } else if (num > 255) {
            hex += 'FF';
        } else {
            let first = num/16 >= 10 ? alphas[parseInt(num/16)] : parseInt(num/16);
            let second = num%16 >= 10 ? alphas[num%16] : num%16;
            hex += first;
            hex += second;
        }
    });
    return hex;
}