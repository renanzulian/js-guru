// Lexical means the words of a language
// At a execution context you have an lexical environment (You have access a set of variables)
// It changes depending the execution context you are

function brazil() {
    var nativeLanguage = 'Português'
}

function unitedStates() {
    var nativeLanguage = 'English'
}

function french() {
    var nativeLanguage = 'Português'
}

// In this case each execution context has it own property nativeLanguage
// The context execution tell which is the lexical environment
// In javascript our lexical scope (available data + variables where the function is defined)
// determines our available variables. Not where the function is called (dynamic scope)
