/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let str = someStr.slice(startIndex, endIndex)
    return str;
}

try{
    console.log(substring(6, 0, 2))
}catch(e){
    throw new Error('Invalid input! Please enter a valid word');
}