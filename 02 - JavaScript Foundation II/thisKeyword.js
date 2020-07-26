// 'this' keyword
// this is an reference to the object that the function is property of

function funcA() {
    console.log(this)
}

funcA()

// It will print the global object that engine create to us
// By the this keyword we can use methods and attributes of the object that call the function

function sayName() {
    console.log(this.name)
}

const person1 = {
    name: 'John',
    sayName: sayName
}
const person2 = {
    name: 'Marie',
    sayName: sayName
}
person1.sayName()
person2.sayName()

// everything in javascript actually lexical scoped. How you write it
// determines what we have available except for the this keyword.
// This keyword is actually dynamically scoped.