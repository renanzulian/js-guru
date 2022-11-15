// There is three ways to call a function in JS
// 1. call function an expression/declare function

function one() {
    return 1;
}

one();

//2. call function as method

var object = {
    two: function() {
        return 2;
    }
}

object.two();

//3. with methods of the object function

var three = new Function("return 3");

three.call();

// All functions in JS are object. Functions are a kind of special object that can be called with "()" keyword
// they receive same special properties and methos that can be used

