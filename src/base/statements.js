module.exports = {
  rules: {
    // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow": "error",

    // Disallow loops with a body that allows only one iteration
    "no-unreachable-loop": "error",

    // Disallow the use of variables before they are defined
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes:   true,
        variables: true,
      },
    ],

    // Require or disallow newlines around variable declarations
    "one-var-declaration-per-line": [ "error", "always" ],

    // Enforce minimum and maximum identifier lengths
    "id-length": [
      "warn",
      {
        min:        3,
        exceptions: [
          "e",
          "t",
          "_t",
          "en",
          "id",
          "to",
          "dt",
        ],
      },
    ],

    /*
     * LOOP STATEMENTS
     */
    // Disallow function declarations that contain unsafe references inside loop statements
    "no-loop-func": "warn",

    /*
     * CONDITIONAL STATEMENTS
     */
    // Disallow else blocks after return statements in if statements
    "no-else-return": "error",

    // Disallow if statements as the only statement in else blocks
    "no-lonely-if": "error",

    // Disallow nested ternary expressions
    "no-nested-ternary": "error",
  },
}
