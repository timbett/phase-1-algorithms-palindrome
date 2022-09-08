function isPalindrome(dad) {
  // Write your algorithm here
  if (dad === dad && dad.split('').reverse().join('') === dad) {

    return true;
  } else {

    return false
  }
}

let myVal = isPalindrome('abba')
console.log(myVal)


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
