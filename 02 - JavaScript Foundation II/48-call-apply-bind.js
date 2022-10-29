// this keyword can be hard to handle because it changes depending where the function
// is called

// js created some features to help us to have the control of the this value

// bind
// you can bind an object to a function and the function will have the binded value for the this

function logName(lastName) {
    console.log(this.name, lastName);
}

logName.bind({name: "Renan"})() // it returns an function

// call and apply works in the same way but the function is invoked imediately
logName.call({name: "Renan"}, "zulian")
logName.apply({name: "Renan"}, ["zulian"])
