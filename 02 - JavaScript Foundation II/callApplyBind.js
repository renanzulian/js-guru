// Call, Apply and Bind is a common method from the functions
// They are useful to handle and manipulate the 'this' keyword and create
// a code more reusable.

// Call
// By the call method you can define what context or what object the this keyword
// should use in a execution context

function sayThePreferredColor(color) {
    console.log(this.name + ' like ' + color)
}

const man = {
    name: 'John'
}

const woman = {
    name: 'Marie'
}

sayThePreferredColor.call(man, 'blue')
sayThePreferredColor.call(woman, 'red')

// Apply
// It's like the call, but the arguments needs to be in array

sayThePreferredColor.apply(man, ['blue'])
sayThePreferredColor.apply(woman, ['red'])

// Bind
// Bind doesn't start the function but save the state to use after

manColorPreferred = sayThePreferredColor.bind(man, 'black')
manColorPreferred()

// currying
// a tip to work with bind

function multiply(a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)
const multiplyByTen = multiply.bind(this, 10)

console.log(multiplyByTwo(5))
console.log(multiplyByTen(5))