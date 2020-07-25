// When the javascript engine meets a parenthesis '()' it will create a new execution context
// It will add a new start at callStack runtime
// Let's look the example below

function bird() {
    // starting a new execution context
    // a new layer has been added to callStack

    // It will be the third layer above the global context
    return 'Blue Bird'
}

function animalFinder() {
    // starting a new execution context
    // a new layer has been added to callStack

    // It will be the second layer above the global context
    return bird()
}

function getAnAnimal() {
     // starting a new execution context
    // a new layer has been added to callStack

    // It will be the first layer above the global context
    return animalFinder()
}

// the callStack has only the global layer
var animal = getAnAnimal()

console.log(animal)

// The global execution context is created by the engine to execute our code
// The engine will create two things: this and the Global Object
// [this] -> A key word that changes whenever a new execution context is started 
// Global Object -> It has all property and methods that javaScript engine allow us to execute (like console.log) 
// this and Global Object can be the same thing (in the browser for example the window and this are the same thing)

