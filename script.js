// complete the given function

function palindrome(str){

	str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;

}
module.exports = palindrome
