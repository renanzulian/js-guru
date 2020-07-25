// Hoisting is a process that the engine do after to define the 
// this and global and before to start the global execution context
// The hoisting will get all keys words 'var' and 'function' and will allocate  
// a memory for them.
// var -> will be ever 'undefined' 
// function -> will have all commands defined between the brackets
// 
// The hoisting allow us to call some variables or to execute some functions before they have defined
// without throw an error.

console.log('Example 1\n')


// before to define them
console.log(varExample1)
console.log(functionExample1())

var varExample1 = 'Cool'

function functionExample1() {
    return "It's myFunction"
}

// after to define them
console.log(varExample1)
console.log(functionExample1())

// Before we start them we will get a 'undefined' and a "It's myFunction"
// After we start them we will get a 'Cool' and a "It's myFunction"


// Remember: hoisting is an process that start before to run the code
// The parser will read line by line and save all var and function
// Whether you define two things with the same name, the latest will be used.
// Let's look another example:

console.log('\nExample 2\n')


// before to define them
console.log(example2)
console.log(functionExample2())

var example2 = 'Cool'
var example2 = 'Very cool'

function functionExample2() {
    return 'Nice'
}
function functionExample2() {
    return 'Very nice'
}

// after to define them
console.log(example2)
console.log(functionExample2())

// The example is 'Very cool' and the exampleFunction returns 'Very nice'


// What will happen if you define that a var is a function?
// the var will be undefined an because of this we can't start a it's execution context
// If you try it you will get an error

console.log('\nExample 3\n')


console.log(myVarIsAFunction)
var myVarIsAFunction = function() {
    return "I'm a function"
}
console.log(myVarIsAFunction())

// Running the code above you won't get an error.
// before to define will get 'undefined' (It's because we don't start the function context)
// after we will get "I'm a function"


// The hoisting have the same process whatever execution context you are
// If you define a var into a function and get it before to instance it you will get a 'undefined'
// The example bellow look like the engine will do with the hoisting

console.log('\nExample 4\n')


var lastFunction = undefined // The engine will put this line
var attribute = undefined // The engine will put this line

var attribute = 'Amazing'

var lastFunction = function() {
    var attribute = undefined // THe engine will put this line

    console.log('My attribute is: ' + attribute)

    var attribute = 'Awesome'

    console.log('My new attribute is: ' + attribute)
}

lastFunction()

