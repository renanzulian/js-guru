// Functions can be expressed, defined or invoked. Do you know what are the differences between them?
// 
// Function Expression
// They are only expressed and be initialized when they are invoked
// Look at some examples how we create a function expression

var funcExpression1 = function(){
    return "It's a function expression"
}

var funcExpression2 = () => {
    return "It's a function expression"
}

const funcExpression3 = function(){
    return "It's a function expression"
}

// Function Declaration
// They are created by the engine (at the parser process) an have the memory allocated in the beginning.
// The hoisting is the responsible to declare the functions 
// Look at how we can declare a function

function funcDeclaration() {
    return "It's a function declaration"
}

// Function Invocation/Call/Execution
// The time that executionContext is created
// It don't depends if the function is an expression or a declaration. Because
// it's about to execute the function
// Look how a example of function invocation

funcExpression1()
funcDeclaration()
