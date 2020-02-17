/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) { 

    let reversed = '';

    for(let i = someStr.length - 1; i >= 0; i--){
        reversed += someStr[i]
    }

    if(reversed === someStr){
        return true
    }

    return false
}

console.log(isPalindrome("racecar"))