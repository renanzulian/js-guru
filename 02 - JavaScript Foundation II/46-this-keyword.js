// This is the object that the fuction is property of

const object = {
    name: "Foo",
    sing() {
        return this.name; // this is the object variable
    }
}

// What are the benefits of use this keyword
// 1 - provide an interface to acess properties and methods of the object that the function in property of
// 2 - execute same code for multiple objects

function walk() {
    console.log(this.name, "is walking...");
}
// if I run only this peace of code we gonna get an 'undefined is walking...' because the global object don't have the name property

const name = "Joseph"

// but if I put the code above I won't get undefined again, but 'Joseph is walking'

const director = {
    name: "Marie",
    walk
}

const manager = {
    name: "Alice",
    walk
}

// both objects above can use the walk object but the fuction gonna get a different value for this for each execution

// this works like a placeholder that the execution context puts who have called the function
