module.exports = {
  rules: {
    // Disallow the use of eval()-like methods
    "no-implied-eval":                    "off",
    "@typescript-eslint/no-implied-eval": "error",

    // Disallow magic numbers
    "no-magic-numbers":                    "off",
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignoreArrayIndexes:            true,
        ignoreDefaultValues:           true,
        ignoreEnums:                   true,
        ignoreNumericLiteralTypes:     true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes:             true,
      },
    ],

    // Disallow unused expressions
    "no-unused-expressions":                    "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary:      true,
      },
    ],

    // Disallow @ts-<directive> comments or require descriptions after directives
    "@typescript-eslint/ban-ts-comment": [ "error", { "ts-expect-error": "allow-with-description" } ],

    // Disallow variable redeclaration
    "no-redeclare":                    "off",
    "@typescript-eslint/no-redeclare": "error",

    // Disallow throwing literals as exceptions
    "no-throw-literal":                    "off",
    "@typescript-eslint/no-throw-literal": "error",

    // Disallow unused variables
    "no-unused-vars":                    "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars":     [ "warn", { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" } ],

    // Require proper TSDoc syntax
    "tsdoc/syntax": "warn",

    // Require a eslint-enable comment for every eslint-disable comment
    "eslint-comments/disable-enable-pair": "off",
  },
}
