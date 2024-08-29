/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += 'x';
  }
  return result;
}

console.log(xify('hello')); 
console.log(xify('hi there')); 

function yellingChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + '!';
  }
  return result;
}

console.log(yellingChars('goodness')); 
console.log(yellingChars('oh hello'));

function indexedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += i + str[i];
  }
  return result;
}

console.log(indexedChars('hello')); 
console.log(indexedChars('bye')); 

function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += `(${i + 1})` + str[i];
  }
  return result;
}

console.log(numberedChars('hello')); 
console.log(numberedChars('bye')); 

function exclaim(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?' || str[i] === '.') {
      result += '!';
    } else {
      result += str[i];
    }
  }
  return result;
}


console.log(exclaim('What are you doing? Are you a fool?')); 
console.log(exclaim('This is fine.')); 

function repeatIt(str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

console.log(repeatIt('beetlejuice', 3)); 
console.log(repeatIt('oh hi!', 8)); 

function truncate(str) {
  if (str.length > 15) {
    return str.slice(0, 15) + '...';
  } else {
    return str;
  }
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.')); 
console.log(truncate("Well, that's just, like, your opinion man.")); 

function ciEmailify(name) {
  let email = name.toLowerCase().replace(' ', '.');
  email += '@codeimmersives.com';
  return email;
}

console.log(ciEmailify('colin jaffe')); 
console.log(ciEmailify('Anthony DeRosa'));

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('colin'));
console.log(reverse('mesuara')); 

function onlyVowels(str) {
  return str.match(/[aeiouAEIOU]/g).join('');
}


console.log(onlyVowels('Colin Jaffe')); 
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa')); 

function crazyCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(crazyCase('hello')); 
console.log(crazyCase('multiple words here')); 
console.log(crazyCase('YELLING'));

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(titleCase('return of the king')); 
console.log(titleCase('cOde iMMerSives')); 

function camelCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelCase('oh Hello')); 
console.log(camelCase('well yeah of course')); 
console.log(camelCase('Boy howdy')); 

function crazyCase2ReturnOfCrazyCase(str) {
  let result = '';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (count % 2 === 0) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
      count++;
    } else {
      result += str[i];
    }
  }
  
  return result;
}


console.log(crazyCase2ReturnOfCrazyCase('multiple words here')); 
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'));
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
