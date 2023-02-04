module.exports = {
  rules: {
    // Enforce default parameters to be last
    "default-param-last":                    "off",
    "@typescript-eslint/default-param-last": "error",

    // Require explicit return types on functions and class methods
    "@typescript-eslint/explicit-function-return-type": "off",

    // Enforce using a particular method signature syntax
    "@typescript-eslint/method-signature-style": [ "error", "method" ],

    // Enforce using function types instead of interfaces with call signatures
    "@typescript-eslint/prefer-function-type": "warn",

    // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
  },
}
