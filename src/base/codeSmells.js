module.exports = {
  rules: {
    // Disallow the use of alert, confirm, and prompt
    "no-alert": "error",

    // Disallow the use of arguments.caller or arguments.callee
    "no-caller": "error",

    // Disallow comma operators
    "no-sequences": "error",

    // Require let or const instead of var
    "no-var": "error",

    // Disallow void operators
    "no-void": "error",

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": [ "error", { allowProperties: false } ],

    // Disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": "error",

    // Disallow await inside of loops
    "no-await-in-loop": "warn",

    // Disallow the use of eval()-like methods
    "no-implied-eval": "error",

    // Disallow magic numbers
    "no-magic-numbers": [
      "warn",
      {
        ignoreArrayIndexes:  true,
        ignoreDefaultValues: true,
      },
    ],

    // Disallow unused expressions
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary:      true,
      },
    ],

    // Require const declarations for variables that are never reassigned after declared
    "prefer-const": "error",

    // Disallow variable redeclaration
    "no-redeclare": "error",

    // Disallow throwing literals as exceptions
    "no-throw-literal": "error",

    // Disallow certain properties on certain objects
    "no-restricted-properties": [
      "error",
      {
        object:   "arguments",
        property: "callee",
        message:  "arguments.callee is deprecated",
      },
      {
        object:   "global",
        property: "isFinite",
        message:  "Please use Number.isFinite instead",
      },
      {
        object:   "self",
        property: "isFinite",
        message:  "Please use Number.isFinite instead",
      },
      {
        object:   "window",
        property: "isFinite",
        message:  "Please use Number.isFinite instead",
      },
      {
        object:   "global",
        property: "isNaN",
        message:  "Please use Number.isNaN instead",
      },
      {
        object:   "self",
        property: "isNaN",
        message:  "Please use Number.isNaN instead",
      },
      {
        object:   "window",
        property: "isNaN",
        message:  "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message:  "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message:  "Please use Object.defineProperty instead.",
      },
      {
        object:   "Math",
        property: "pow",
        message:  "Use the exponentiation operator (**) instead.",
      },
    ],

    // Disallow use of assignment in return statement
    "no-return-assign": [ "error", "always" ],

    // Disallow use of `javascript:` urls.
    "no-script-url": "error",

    // Disallow unused variables
    "no-unused-vars":                "off",
    "unused-imports/no-unused-vars": [ "warn", { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" } ],

    // Disallow unsafe regular expressions
    "unicorn/no-unsafe-regex": "error",

    // Disallow identifiers starting with new or class
    "unicorn/no-keyword-prefix": "error",

    // Disallow unused eslint-disable comments
    "eslint-comments/no-unused-disable": "error",

    // Require include descriptions in ESLint directive-comments
    "eslint-comments/require-description": "error",

    // Disallow the use of the null literal, to encourage using undefined instead
    "unicorn/no-null": "warn",
  },
}
