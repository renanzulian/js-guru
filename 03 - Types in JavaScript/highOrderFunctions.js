// There are three ways use functions

// Without any parameter

function sayBaah() {
    console.log("baah");
}

sayBaah()

// With data parameters
// it help us to create an abstraction that allows the code be more generic and usefull for mayn context

function sayGoodMorningTo(name) {
    console.log("good morning", name);
}

sayGoodMorningTo("will")

// With function parameters
// HOF (High Order Functions) are functions that receive other function as parameters or return other functions
// It helps us to be more generic then only data parameters

// HOF WITH FUNCTION AS PARAMETER
function saySomething(name, whatYouWantToSayFunction) {
    whatYouWantToSayFunction(name);
}

saySomething("adam", sayGoodMorningTo);

// HOF WITH FUNCTION AS RETURN
const multiplyBy = (firstNumber) => (secoundNumber) => firstNumber * secoundNumber;
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(10);

// Noticie how many possibilities whe can do with same function? It is the power of the abstraction
