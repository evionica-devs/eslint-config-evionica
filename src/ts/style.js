module.exports = {
  rules: {
    // Enforce naming conventions for everything across a codebase
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "types":    [ "boolean" ],
        "format":   [ "PascalCase" ],
        "prefix":   [
          "is",
          "should",
          "has",
          "can",
          "did",
          "will",
          "was",
        ],
      },
      {
        "selector": "typeParameter",
        "format":   [ "PascalCase" ],
        "prefix":   [ "T" ],
      },
    ],

    // Enforce consistent indentation
    "indent":                    "off",
    // This TS rule could make some problems - think about replacing it with prettier
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase":               1,
        "MemberExpression":         1,
        "FunctionDeclaration":      { "parameters": "first" },
        "FunctionExpression":       { "parameters": "first" },
        "CallExpression":           { "arguments": "first" },
        "ArrayExpression":          "first",
        "ObjectExpression":         "first",
        "ImportDeclaration":        "first",
        "flatTernaryExpressions":   false,
        "offsetTernaryExpressions": true,
        "ignoreComments":           false,
      },
    ],

    // Enforce the consistent use of either backticks, double, or single quotes
    "quotes":                    "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { "avoidEscape": true, "allowTemplateLiterals": true },
    ],

    // Require or disallow semicolons instead of ASI
    "semi":                    "off",
    "@typescript-eslint/semi": [ "error", "never" ],

    // Require a consistent member declaration order.
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          // Index signature
          "signature",

          // Fields
          "field",

          // Static initialization
          "static-initialization",
          "public-static-method",

          // Constructors
          "constructor",

          // Getters and Setters at the same rank
          [ "get", "set" ],

          // Methods
          "method",
        ],
      },
    ],

    // Enforce consistent brace style for blocks
    "brace-style":                    "off",
    "@typescript-eslint/brace-style": [ "error", "1tbs" ],

    /*
     * SPACES
     */
    // Enforce consistent spacing before and after keywords
    "keyword-spacing":                    "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        "overrides": {
          "if":     { before: true, after: true },
          "for":    { after: true },
          "while":  { after: true },
          "static": { after: true },
        },
      },
    ],

    // Enforce consistent spacing before blocks
    "space-before-blocks":                    "off",
    "@typescript-eslint/space-before-blocks": "error",

    // Enforce consistent spacing inside braces
    "object-curly-spacing":                    "off",
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects:  false,
        objectsInObjects: false,
      },
    ],

    // Enforce consistent spacing before and after commas
    "comma-spacing":                    "off",
    "@typescript-eslint/comma-spacing": [ "error", { before: false, after: true } ],

    // Require or disallow spacing between function identifiers and their invocations
    "func-call-spacing":                    "off",
    "@typescript-eslint/func-call-spacing": [ "error", "never" ],

    // Enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren":                    "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        asyncArrow: "always",
        named:      "never",
        anonymous:  "never",
      },
    ],

    // Require consistent spacing around type annotations
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        before:    false,
        after:     true,
        overrides: {
          arrow: {
            before: true,
            after:  true,
          },
        },
      },
    ],

    /*
     * COMMAS
     */
    // Require or disallow trailing commas
    "comma-dangle":                    "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays:    "always-multiline",
        objects:   "always-multiline",
        imports:   "never",
        exports:   "never",
        functions: "never",
      },
    ],

    // Require a specific member delimiter style for interfaces and type literals.
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter:   "none",
          requireLast: true,
        },
        singleline: {
          delimiter:   "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],

    /*
     * NEW LINES
     */
    // Require or disallow an empty line between class members
    "lines-between-class-members":                    "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    // Require or disallow padding lines between statements
    "padding-line-between-statements":                    "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "break", next: "*" },
      { blankLine: "always", prev: "*", next: "class" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "iife", next: "*" },
      { blankLine: "always", prev: "*", next: "iife" },
      { blankLine: "always", prev: "try", next: "*" },
      { blankLine: "always", prev: [ "case", "default" ], next: "*" },
    ],
  },
}
