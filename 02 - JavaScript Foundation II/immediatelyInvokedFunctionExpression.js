// IIFE -> Immediately Invoked Function Expression
// This concept is useful when you want to code better and to separation of concerns

// How you can define a function and start it without save it at your namespace
// or not allocate memory to this variable?
// You can use IIFE

(function(args) {
    console.log(args)
})('Cloud')

// You have invoked a function that isn't in global scope
