module.exports = {
  rules: {
    // Disallow unnecessary return await
    "no-return-await":                 "off",
    "@typescript-eslint/return-await": "error",

    // Disallow Promises in places not designed to handle them
    "@typescript-eslint/no-misused-promises": "error",

    // Require any function or method that returns a Promise to be marked async
    "@typescript-eslint/promise-function-async": "warn",

    /*
     * Require Promise-like statements to be handled appropriately
     * "@typescript-eslint/no-floating-promises": [
     *   "error",
     *   {
     *     ignoreIIFE: false,
     *     ignoreVoid: true,
     *   },
     * ],
     */

    // Disallow async functions which have no await expression
    "require-await":                    "off",
    "@typescript-eslint/require-await": "warn",
  },
}
