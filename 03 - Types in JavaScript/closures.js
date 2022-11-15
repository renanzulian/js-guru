// Closure is the combination of concepts of functions (HOF) and lexical scope
// let's review the code below

function one() {
    const number1 = 1;
    return function two() {
        const number2 = 2;
        return function three() {
            const number3 = 3;
            console.log(`${number1} ${number2} ${number3}`);
        }
    }
}

// 1 - Garbage Collector Approach
// Remember that when a scope is done the variables of that scope are cleaned to keep the memory clean
// In this way you can think that "So the log in this context gonna be undefined undefined 3"

const aux = one()()
aux();

// As we already have seen it doesn't happen, but we haven't know why
// It happens because of the closures. The JS creates the Closure to keep some data safe to be used to other functions
// All data that is used in the other inside functions wasn't cleaned, but saved in the closure
// It means that with this concept we can construct really generic object and functions that can help us to keep DRY
// Look the code below

const grandpa = (grandpaName) => (fatherName) => (sonName) => 
    console.log(`${grandpaName} ${fatherName} ${sonName}`);

const joseph = grandpa("joseph");
const john = joseph("john");
john("jessie")
john("jay")

// The closure created in this case save the name of the grandpa and the father to be used whenever a new son burn


// How about when it is used with asyncronous functions?

function sayMyName() {
    const myName = "Marie";
    setTimeout(() => {
        console.log(myName);
    }, 1000);
}

sayMyName();

// If you got the concept about the closures you gonna be able to reply why the code above works
// The arrow function is lexically linked with the sayMyName function and the function is used a variable from that
// The JS creates the closure and keep it save until there is any reference for the arrow function