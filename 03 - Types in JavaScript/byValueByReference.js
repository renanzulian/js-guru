// Copy by value vs Copy by reference
// Copy by value means that the new variable will get the value, not the reference
// Copy by reference mean that the new variable will get the reference, not the value
// Primitive types are copy by value and Non-primitive types are copy by reference

// With primitive types
var a = 10
var b = a

a++

console.log(b) // b is 10
console.log(a) // a is 11

// With objects

var obj1 = { name: 'User', age: 20 }
var obj2 = obj1

obj2.age ++

console.log(obj1) // age is 21
console.log(obj2) // age is 21

var array1 = [1, 2, 3, 4, 5]
var array2 = array1
array1.push(6)

console.log(array1) // It has 6 elements
console.log(array2) // It has 6 elements

// How we can copy values instead of copy the reference?

var myObj1 = { name: 'user123', password: '123456789'}
var myObj2 = Object.assign({}, obj1) // Will merge an empty object with the obj1
var myObj3 = { ...obj1 } // It is an ES6 feature that is like the copy above

var myArray1 = [1, 2, 3, 4, 5]
var myArray2 = [].concat(myArray1) // Will concatenate an empty array with the array1
var myArray3 = [ ...myArray1 ] // It is an ES6 feature that is like the copy above

// Whether a object has another non-primitive types it will copy by the reference
// The copy is only by the first 'layer'.

var user1 = { name: 'john', address: { zipCode: '101010'}}
var user2 = { ...user1 }

user1.address.zipCode = '202020'

console.log(user1) // the zipCode is 202020
console.log(user2) // the zipCode is 202020

// It is because the copy isn't deep
// If you want to do a deep copy use JSON!

var user3 = JSON.parse(JSON.stringify(user1))

 