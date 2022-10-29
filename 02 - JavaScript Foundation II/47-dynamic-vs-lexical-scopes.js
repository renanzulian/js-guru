// As we have learned in pasted classes
// In javascript our lexical scope (available data + variables where the function weas defined)
// determines our available variables. Not where the functions is called (dynamic scope)

// the this keyword don't follow this rule all the time. every time when a neu context 
// the 'this' receive a new value.

function first() {
    console.log('first', this); // this -> global
    function secound() {
        console.log('secound', this); // this -> global
        const obj = {
            third: function() {
                console.log('third', this); // this -> obj
            }
        };
        c.third();
    }
    secound();
}

first();

// you could ask me why the secound this log global
// who have called invoked the secound function was the first, that was called in the global context
// it means that the this is linked to the window or global obj

// how can we link the this lexicaly in this context?
// we can use arrow functions to avoid this kind of mistake

function first() {
    console.log('first', this); // this -> global
    const secound = () => {
        console.log('secound', this); // this -> global
        const obj = {
            third: function() {
                console.log('third', this); // this -> obj
            }
        };
        c.third();
    }
    secound();
}