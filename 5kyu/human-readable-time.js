// Link to challenge:

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My refactored solution:

function humanReadable(s) {
    let hrs = parseInt( s / 3600 );
    let mins = parseInt( s / 60 ) % 60;
    let secs = s % 60;
    let result = [];
    result.push(hrs, mins, secs);
    return result.map(n => n<10 ? '0'+n : n).join(':');
}

// My original solution:

function humanReadable (s) {
    let secs = 0,
        mins = 0,
        hrs = 0,
        result = [];
    while (s%60 !== 0){
        secs ++;
        s --;
    }
    mins = s/60;
    while (mins > 59){
        mins -= 60;
        hrs ++;
    }
    result.push(hrs, mins, secs);
    return result.map(num => num < 10 ? '0'+num : num).join(':');
}