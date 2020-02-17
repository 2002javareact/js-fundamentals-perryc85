/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let obj = {
    name: 'Charles',
    age: 34
}

function objectProperties(someObj) {
    for(let property in someObj){
        console.log(`${property}: ${someObj[property]}`);
    }
}

objectProperties(obj);