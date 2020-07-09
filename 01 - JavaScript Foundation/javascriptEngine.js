// For you run a javascript code you will need an engine
// You can find a lot of engine on web and some browsers uses diferents engines
// The most popular and most powerfull nowadays is the V8 (created by google)
// The first engine was the spidemonkeyjs created by Brendan Eich

// Example how the engine works

function jsEngine(code) {
    return code.split(/\s+/)
}

jsEngine('const variable = true')

// return: [ 'const', 'variable', '=', 'true' ]

// interpreters and compilers
// interpreter is translated on the fly
// Just In Time Compiler - JIT COMPILER  
// JIT compiler = interpreter + compiler