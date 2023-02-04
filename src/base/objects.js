module.exports = {
  rules: {
    // Disallow Object constructors
    "no-new-object": "error",

    // Disallow returning value from constructor
    "no-constructor-return": "error",

    // Disallow unused private class members
    "no-unused-private-class-members": "error",

    // Enforce that class methods utilize this
    "class-methods-use-this": "warn",

    // Enforce a maximum number of classes per file
    "max-classes-per-file": [ "error", 1 ],

    // Require constructor names to begin with a capital letter
    // eslint-disable-next-line unicorn/no-keyword-prefix -- required by rule options
    "new-cap": [ "error", { newIsCap: true, capIsNew: true } ],

    // Disallow use of this in contexts where the value of this is undefined
    "no-invalid-this": "error",

    // Disallow unnecessary constructors
    "no-useless-constructor": "error",

    // Require or disallow method and property shorthand syntax for object literals
    "object-shorthand": [ "error", "always" ],

    // Enforce dot notation whenever possible
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
        allowPattern:  "^[a-z]+(_[a-z]+)+$",
      },
    ],

    // Require object keys to be sorted
    "sort-keys": [
      "warn",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 5 },
    ],

    // Require destructuring from arrays and/or objects
    "prefer-destructuring": [ "error", { object: true, array: false } ],

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    "prefer-object-spread": "error",

    // Require quotes around object literal property names
    "quote-props": [ "error", "consistent" ],

    // Require grouped accessor pairs in object literals and classes
    "grouped-accessor-pairs": [ "error", "getBeforeSet" ],

    // Require a newline after each call in a method chain
    "newline-per-chained-call": [ "error", { "ignoreChainWithDepth": 2 } ],

    // Disallow duplicate class members
    "no-dupe-class-members": "error",
  },
}
