// Do you know the diferences between function scope and block scope?
// Scope -> Allow us to access some data like variables and functions
// 
// Everything that you define in a block scope don't link to previous scope (because it creates a new scope) 

if (5 > 4) {
    var newVar = '5 is greater then 4'
}

console.log(newVar) // it gonna works

// var keywords is not good to use because it breaks the scopes and cause headache 
// You should use const and let because this feature of EC6 respects the scopes!

// Exercises

// what do you think that it gonna output?

function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("final", i); // it will get 5 because by default js is function scope based and the keyword var create a variable for the current scope
}
console.log("outside of function scope", i); // it will get undefined, because js is a function scope based

// 0
// 1
// 2
// 3
// 4
// 5

// What have we learned in this class?
// By default javascript is a function scope language. 
// It means that if you create a variable in a if statement you gonna be able to access it outside of if scope

// use let and const to help your jscode to be more predictable