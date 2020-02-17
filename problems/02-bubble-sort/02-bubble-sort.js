/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    
    let temp;
    let sortedArr = [];

    for(let i = numArray.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(numArray[j] > numArray[j + 1]){
                temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    for(let i = 0; i < numArray.length; i++){
        sortedArr.push(numArray[i])
    }

    return sortedArr;

}

console.log(bubbleSort([100,2,90,4]))