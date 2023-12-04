/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  newStr = str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "");
  let [left, right] = [0, newStr.length - 1];
  if (str.length == 0) {
    return true;
  }
  while (right >= left) {
    if (newStr[left] === newStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
