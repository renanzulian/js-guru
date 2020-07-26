// Javascript is wired sometimes
// Have you ever seen a variable declaration in a function and it can be get on the global?
// If you don't use the javascript in strict mode you can run it.
// See the example below

function animal() {
    myPet = 'Dog'
    return myPet
}

console.log(animal())
console.log(myPet)

// It's very wired!
// The strict mode is useful to prevent javascript do somethings like that
// See another example that is a little confused

var func = function school() {   
    return 'College'
}

console.log(func())
console.log(school()) // It will break down because school was not declared

// In the example above you only can invoke the function 'school' in the function 'school'
// My tip for you today: Use strict mode in java script!

