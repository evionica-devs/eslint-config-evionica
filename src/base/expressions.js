module.exports = {
  rules: {
    // Disallow expressions where the operation doesn't affect the value
    "no-constant-binary-expression": "error",

    // Disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",

    // Require the use of === and !==
    "eqeqeq": [ "error", "always" ],

    // Disallow the use of eval()
    "no-eval": "error",

    // Disallow multiline strings
    "no-multi-str": "error",

    // Require template literals instead of string concatenation
    "prefer-template": "error",

    // Disallow logical assignment logical operator shorthand
    "logical-assignment-operators": [ "error", "never" ],
  },
}
