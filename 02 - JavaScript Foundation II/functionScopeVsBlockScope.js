// Do you know the diferences between function scope and block scope?
// Scope -> Allow us to access some data like variables and functions
// 
// Everything that you define in a block scope don't link to previous scope 
// What you define in a function scope, the lasted one can have access to it

if (5 > 4) {
    var newVar = '5 is greater then 4'
}

console.log(newVar) // It will works because the if scope is like a function scope

// var keywords is not good to use because it breaks the scopes and cause headache 
// You should use const and let because this feature of EC6 respects the scopes!


