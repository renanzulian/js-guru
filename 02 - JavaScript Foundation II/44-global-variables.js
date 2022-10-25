// Why don't we create all variables and put it in the global context?
// It would help us to never get an undefined or null value for a variable

// I should take care with our declarations to don't polute the global context.
// If you don't help the js with it probabily you gonna get some problems like:

// namespace conflict 
// imagine that you import two scripts and both have an save function. When JS put everything together to run your code
// the functions will conflict and only the last gonna be able to accessed

// script1.js
var name = "foo";

// script2.js
var name = "bar";

// running both scripts in a same app

// name = "bar"
// probably if script1 use this namespace it gonna have some problems

// garbage collector problems
// Js uses the scopes and enviroments to free memory that won't be used. So if you put everthing
// in a scope that js is not enabled to remove it gonna be accumulate and any moment you can get an memory insuficient error

