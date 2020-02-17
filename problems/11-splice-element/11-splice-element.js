/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    someArr.splice(index, 1)
    return someArr
}

console.log(spliceElement(['Jan', 'March', 'April', 'June'], 1))