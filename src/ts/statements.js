module.exports = {
  rules: {
    // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow":                    "off",
    "@typescript-eslint/no-shadow": "error",

    // Disallow the use of variables before they are defined
    "no-use-before-define":                    "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes:   true,
        variables: true,
        enums:     true,
        typedefs:  true,
      },
    ],

    // Disallow using the delete operator on computed key expressions
    "@typescript-eslint/no-dynamic-delete": "warn",

    // Enforce RegExp#exec over String#match if no global flag is provided
    "@typescript-eslint/prefer-regexp-exec": "warn",

    // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",

    /*
     * LOOP STATEMENTS
     */
    // Disallow iterating over an array with a for-in loop
    "@typescript-eslint/no-for-in-array": "error",

    // Enforce the use of for-of loop over the standard for loop where possible
    "@typescript-eslint/prefer-for-of": "warn",

    // Disallow function declarations that contain unsafe references inside loop statements
    "no-loop-func":                    "off",
    "@typescript-eslint/no-loop-func": "warn",

    /*
     * CONDITIONAL STATEMENTS
     */
    // Disallow conditionals where the type is always truthy or always falsy
    "@typescript-eslint/no-unnecessary-condition": "off",

    // Enforce non-null assertions over explicit type casts
    "@typescript-eslint/non-nullable-type-assertion-style": "error",

    // Require switch-case statements to be exhaustive with union type
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
}
