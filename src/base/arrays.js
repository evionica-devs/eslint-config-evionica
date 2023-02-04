module.exports = {
  rules: {
    // Enforce return statements in callbacks of array methods
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach:  true,
      },
    ],

    // Disallow generic Array constructors
    "no-array-constructor": "error",
  },
}
