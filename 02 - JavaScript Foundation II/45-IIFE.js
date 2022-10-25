// How can we avoid our code to have global context issues?
// New versions of ECMAScripts creates some features to avoid it by default, but if you are working with a legacy code
// you can use the IIFE (Immediately Invoked Function Expression)


// IIFE
(function () { //function declaration inside in a function expression

})();

// It a commom js pattern to avoid using the global context
 
// With IIFE whe can only add one namespace per script. It gonna help us to avoid global pollute

var script1 = (function () { //function declaration inside in a function expression
    return {
        // whe can choose what whe want to delivery in the script
        funcReturnsA: () => "",
        funcReturnsB: () => "",
    }
})();
