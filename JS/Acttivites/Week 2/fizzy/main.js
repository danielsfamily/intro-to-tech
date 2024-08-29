/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
 

function  fizzy() {


// first task - print numbers from 1 - 100.
for (let i = 1; i <= 100; i++) {
  // for numbers divisible by 3 print Fizz. (3, 6, 9, 12)
  if (i % 3 === 0){
    console.log("Fizz");
    // for numbers divisible by 5 print Buzz. (5, 10, 15, 20)
  } else if(i % 5 === 0){
    console.log("Buzz");
    // for numbers divisible by 3 and 5 print FizzBuzz.which will be every 15:(15, 30, 45, 60)
  } else if(i % 15 === 0){
    console.log("FizzBuzz");
    // for numbers divisible by none of the above, print the number.
  }else{
    console.log(i);
  }

  }
  }
  
  




// /**********************************
//  *      OUR CODE GOES BELOW.      *
//  * THIS IS FOR INTERNAL USE ONLY. *
//  * DO NOT ADD OR CHANGE ANYTHING! *
//  **********************************/
if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};