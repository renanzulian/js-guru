// There are 7 types in JavaScript

// Primitive types
typeof 5 // number
typeof true // boolean
typeof 'A small text' // string
typeof undefined // undefined
typeof null // object
typeof Symbol('Just do it') // symbol
// The primitive types is a data that only represents a single value

// Non-primitive types
typeof {} // object
typeof [] // object
typeof function(){} // function
// Non-primitive types doesn't actually contain the value directly instead it has a reference similar to a pointer to somewhere

// "Everything in JavaScript is an object"
// Many things that we interact with directly in javascript such just string, numbers, booleans which
// which are primitive and not object get a little but complicated by the fact that these primitive have
// object wrappers like String, Number or Boolean

true.toString() // It silently creates a wrapper object around this true
Boolean(true).toString() // Something like this

typeof Math // An standard built-in objects
typeof Infinity // An standard built-in objects

// Arrays
// So if typeof an array is a object, How can we check if a variable is an array?
// Use the standard built-in objects!
Array.isArray([true, 10, 'Some data'])

