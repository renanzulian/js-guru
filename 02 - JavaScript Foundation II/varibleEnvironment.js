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


// Scope chain
// How can we know our available variables?
// To this we only need to know what is the lexical scope of the function.
// We can discover it it by eye. You just need to find where the function is written 

var variable = 'An variable'

function funcA(){
    var variable = 'Another'
    funcB()
}

function funcB(){
    console.log(variable)
}

funcA()

// Why it didn't printed? Because is the lexical scope that define the the available variables
// and not the dynamic scope (where the function is called or by position in the call stack)
// 
// Scopes can be linked. It depends how the code is implemented.
// Check this two example below
// 1 - Global lexical environment
// Here all function has only access the variables of the global (Whatever function can call one another)
var x = 'Some value'

function funcA() {
    console.log(x)
}

function funcB() {
    console.log(x)
}

// 2 - Function lexical environment
// Here a function have access the data of the another function
function main() {
    return function example() {
        console.log("Im' a function lexical environment in main")
    }
}

