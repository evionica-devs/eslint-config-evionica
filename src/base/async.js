module.exports = {
  rules: {
    // Disallow unnecessary return await
    "no-return-await": "error",

    // Require returning inside each then() to create readable and reusable Promise chains
    "promise/always-return": [ "error", { ignoreLastCallback: true } ],

    // Enforce the use of catch() on un-returned promises
    "promise/catch-or-return": "error",

    // Disallow returning values from Promise executor functions
    "no-promise-executor-return": "error",

    // Disallow creating new promises with paths that resolve multiple times
    "promise/no-multiple-resolved": "warn",

    // Disallow nested then() or catch() statements
    "promise/no-nesting": "error",

    // Disallow calling new on a Promise static method
    "promise/no-new-statics": "error",

    // Disallow using promises inside of callbacks
    "promise/no-promise-in-callback": "error",

    // Disallow return statements in finally()
    "promise/no-return-in-finally": "error",

    // Disallow wrapping values in Promise.resolve or Promise.reject when not needed
    "promise/no-return-wrap": "error",

    // Prefer await to then()/catch()/finally() for reading Promise values
    "promise/prefer-await-to-then": "error",

    // Disallow async functions which have no await expression
    "require-await": "warn",

    // Enforce consistent param names and ordering when creating new promises
    "promise/param-names": "error",

    // Enforces the proper number of arguments are passed to Promise functions
    "promise/valid-params": "error",
  },
}
