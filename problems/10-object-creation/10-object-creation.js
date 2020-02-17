/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// object literal
let myObj = {
    name: 'Charles',
    age: 34
}

console.log(myObj);


// constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

let myPerson = new Person('Charles', 34)
console.log(myPerson);


// es6 class
class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let person1 = new Employee('Charles', 34)
console.log(person1);