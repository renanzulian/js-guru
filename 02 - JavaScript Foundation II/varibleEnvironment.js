// Each execution context has it's own variable environment.
// So you can define variables with the same name from another context
// Let me you know it with an example

function one() {
    var myVar
    console.log(myVar)
}

function two() {
    var myVar = true
    one()
    console.log(myVar)
}

var myVar = false
two()
console.log(myVar)

// What do you think that will happen?
// execution context one    -> undefined
// execution context two    -> true
// execution context global -> false
// Notice that it don't break. Each context is like a another "world"
// and hav it's own properties (variables)
