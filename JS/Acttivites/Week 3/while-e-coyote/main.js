function numberDoubler(num) {
    // Your code here
        while (num < 100) {
            num *= 2;
        }
        return num;   
}

function stringRepeater(str) {
    // Your code here
    let repeatedStr = str;
    while (repeatedStr.length < 10) {
        repeatedStr += str;
    }
    return repeatedStr;
}

function makeDivisible(x, y) {
    // Your code here
    
        while (x % y !== 0) {
            x += 1;
        }
        return x;
}


module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};