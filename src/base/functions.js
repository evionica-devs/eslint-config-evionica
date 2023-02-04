module.exports = {
  rules: {
    // Disallow unnecessary calls to .bind()
    "no-extra-bind": "error",

    // Disallow empty functions
    "no-empty-function": "error",

    // Disallow new operators with the Function object
    "no-new-func": "error",

    // Disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "error",

    // Disallow redundant return statements
    "no-useless-return": "error",

    // Require generator functions to contain yield
    "require-yield": "error",

    // Require braces around arrow function bodies
    "arrow-body-style": [ "warn", "as-needed" ],

    // Enforce default parameters to be last
    "default-param-last": "error",

    // Require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": "error",

    // Enforce the consistent use of either function declarations or expressions
    "func-style": [
      "error",
      "declaration",
      { allowArrowFunctions: true },
    ],

    // Require rest parameters instead of arguments
    "prefer-rest-params": "error",

    // Require variables within the same declaration block to be sorted
    "sort-vars": "error",

    // Require parentheses around immediate function invocations
    "wrap-iife": [ "error", "inside" ],
  },
}
