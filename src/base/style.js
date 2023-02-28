module.exports = {
  rules: {
    // Enforce camelcase naming convention
    "camelcase": [
      "error",
      {
        properties:          "always",
        ignoreDestructuring: false,
        ignoreImports:       false,
        ignoreGlobals:       false,
        allow:               [ "page_title", "page_location" ],
      },
    ],

    // Enforce a case style for filenames.
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "camelCase":  true,
          "pascalCase": true,
        },
      },
    ],

    // Enforce default clauses in switch statements to be last
    "default-case-last": "error",

    // Enforce a maximum line length
    "max-len": [
      "error",
      {
        code:           120,
        tabWidth:       2,
        ignoreStrings:  true,
        ignoreComments: true,
      },
    ],

    // Enforce consistent newlines before and after dots
    "dot-location": [ "error", "property" ],

    // Enforce consistent indentation
    "indent": [
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
    "quotes": [
      "error",
      "double",
      { "avoidEscape": true, "allowTemplateLiterals": true },
    ],

    // Require or disallow semicolons instead of ASI
    "semi": [ "error", "never" ],

    // Enforce location of semicolons
    "semi-style": [ "error", "first" ],

    // Enforce consistent brace style for all control statements
    "curly": [ "error", "all" ],

    // Enforce consistent brace style for blocks
    "brace-style": [ "error", "1tbs" ],

    // Require parentheses around arrow function arguments
    "arrow-parens": [ "error", "always" ],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    "new-parens": "error",

    /*
     * SPACES
     */
    // Disallow multiple spaces
    "no-multi-spaces": "error",

    // Enforce consistent spacing before and after keywords
    "keyword-spacing": [
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
    "space-before-blocks": "error",

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    "block-spacing": "error",

    // Enforce consistent spacing inside array brackets
    "array-bracket-spacing": [
      "error",
      "always",
      { arraysInArrays: false },
    ],

    // Enforce consistent spacing inside braces
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects:  false,
        objectsInObjects: false,
      },
    ],

    // Enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": [ "error", { before: true, after: true } ],

    // Enforce consistent spacing inside parentheses
    "space-in-parens": [ "error", "never" ],

    // Enforce consistent spacing before and after commas
    "comma-spacing": [ "error", { before: false, after: true } ],

    // Enforce consistent spacing inside computed property brackets
    "computed-property-spacing": [ "error", "never" ],

    // Require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": [ "error", "never" ],

    // Enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": [
      "error",
      {
        asyncArrow: "always",
        named:      "never",
        anonymous:  "never",
      },
    ],

    // Enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": [ "error", { before: true, after: false } ],

    // Require or disallow spacing around the * in yield* expressions
    "yield-star-spacing": [ "error", "after" ],

    // Enforce consistent spacing between keys and values in object literal properties
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon:  true,
        align:       "value",
      },
    ],

    // Disallow trailing whitespace at the end of lines
    "no-trailing-spaces": [ "error", { ignoreComments: true } ],

    // Disallow whitespace before properties
    "no-whitespace-before-property": "error",

    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [ "error", "never" ],

    // Enforce consistent spacing before or after unary operators
    "space-unary-ops": [ "error", { "words": true, "nonwords": false } ],

    // Enforce spacing around colons of switch statements
    "switch-colon-spacing": [ "error", { "after": true, "before": false } ],

    // Require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": [ "error", "never" ],

    // Require or disallow spacing between template tags and their literals
    "template-tag-spacing": [ "error", "never" ],

    /*
     * COMMAS
     */
    // Require or disallow trailing commas
    "comma-dangle": [
      "error",
      {
        arrays:    "always-multiline",
        objects:   "always-multiline",
        imports:   "never",
        exports:   "never",
        functions: "never",
      },
    ],

    // Enforce consistent comma style
    "comma-style": [ "error", "last" ],

    /*
     * NEW LINES
     */

    // Enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": [ "error", "consistent" ],

    // Enforce line breaks after each array element
    "array-element-newline": [ "error", "consistent" ],

    // Enforce consistent line breaks after opening and before closing braces
    "object-curly-newline": [ "error", { "multiline": true } ],

    // Enforce line breaks between arguments of a function call
    "function-call-argument-newline": [ "error", "consistent" ],

    // Enforce consistent line breaks inside function parentheses
    "function-paren-newline": [ "error", "consistent" ],

    // Enforce the location of arrow function bodies
    "implicit-arrow-linebreak": [ "error", "beside" ],

    // Require or disallow an empty line between class members
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    // Disallow multiple empty lines
    "no-multiple-empty-lines": "error",

    // Enforce consistent linebreak style for operators
    "operator-linebreak": [ "error", "before" ],

    // Require or disallow padding lines between statements
    "padding-line-between-statements": [
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

    "unicorn/switch-case-braces": "off",

    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          "props": true,   
        }
      }
    ]
  },
}
