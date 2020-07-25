// Function arguments
// Every time when a execution context is started an object and a key word is created.
// When a function is invoked the engine create these two things to us (like global works)
// The key word is 'this' (Like we learned at execution context class)
// The object with all arguments ({ indexOfArgument: value })

function marry(person1, person2) {
    // value of arguments: { 0: 'John', 1: 'Marie' }
    return `${person1} is married with ${person2}`
}

marry('John', 'Marie')

// Pay attention!
// If you try to call the arguments like an object you will get an error, because you cannot call arguments.0
// or something like that. If you want to work with an array you should use spread

function party(...args) {
    return `${args[0]} was in the party`
}