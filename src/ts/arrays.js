module.exports = {
  rules: {
    // Enforce includes method over indexOf method
    "@typescript-eslint/prefer-includes": "warn",

    // This natural typing of reduce often not working properly, so it's better to disable it
    "@typescript-eslint/prefer-reduce-type-parameter": "off",

    // Require Array#sort calls to always provide a compareFunction
    "@typescript-eslint/require-array-sort-compare": "error",

    // Disallow generic Array constructors
    "no-array-constructor":                    "off",
    "@typescript-eslint/no-array-constructor": "error",
  },
}
