// A javascript code needs an engine to run
// You can find a lot of engine on web and the browsers use many kinds of engine
// The most current popular and most powerful nowadays is the V8 (created by google)
// The first engine was the spidermonkey created by Brendan Eich

// Example how the engine works

function jsEngine(code) {
    return code.split(/\s+/)
}

jsEngine('const variable = true')

// return: [ 'const', 'variable', '=', 'true' ]

// interpreters and compilers
// compilers translate all code before to start it
// interpreter is translated on the fly
// Just In Time Compiler - JIT COMPILER  
// JIT compiler = interpreter + compiler
