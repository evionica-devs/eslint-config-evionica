module.exports = {
  rules: {
    // Disallow non-null assertion in locations that may be confusing
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    // Disallow unnecessary equality comparisons against boolean literals
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    // Require expressions of type void to appear in statement position
    "@typescript-eslint/no-confusing-void-expression": "error",

    // Disallow the void operator except when used to discard a value
    "@typescript-eslint/no-meaningless-void-operator": "error",

    // Disallow non-null assertions in the left operand of a nullish coalescing operator
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // Enforce using the nullish coalescing operator instead of logical chaining
    "@typescript-eslint/prefer-nullish-coalescing": "warn",

    // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
    "@typescript-eslint/prefer-optional-chain": "error",

    // Require both operands of addition to be the same type and be bigint, number, or string
    "@typescript-eslint/restrict-plus-operands": "error",

    // Enforce template literal expressions to be of string type
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber:  true,
        allowNullish: true,
      },
    ],

    /*
     * This rule is disabled because it doesn't work well with !! boolean conversion
     * Using Boolean() object wrapper is not recommended & less performant
     */
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
}
