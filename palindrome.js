// This is code to check whether a string is a palindrome

const checkIsPalindrome = (s) => {
   
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return "This is not a palindrome";
        }
        left++;
        right--;
    }
    return "Indeed this is a palindrome!";
};


console.log(checkIsPalindrome("racecar"))

