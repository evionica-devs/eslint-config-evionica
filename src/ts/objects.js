module.exports = {
  rules: {
    // Disallow use of this in contexts where the value of this is undefined
    "no-invalid-this":                    "off",
    "@typescript-eslint/no-invalid-this": "error",

    // Disallow unnecessary constructors
    "no-useless-constructor":                    "off",
    "@typescript-eslint/no-useless-constructor": "error",

    // Enforce dot notation whenever possible
    "dot-notation":                    "off",
    "@typescript-eslint/dot-notation": [
      "error",
      {
        allowKeywords: true,
        allowPattern:  "^[a-z]+(_[a-z]+)+$",
      },
    ],

    // Require explicit accessibility modifiers on class properties and methods
    "@typescript-eslint/explicit-member-accessibility": [ "error", { accessibility: "explicit" } ],

    // Require .toString() to only be called on objects which provide useful information when stringified
    "@typescript-eslint/no-base-to-string": "error",

    // Disallow classes used as namespaces
    "@typescript-eslint/no-extraneous-class": [ "error", { allowWithDecorator: true } ],

    // Require or disallow parameter properties in class constructors
    "@typescript-eslint/parameter-properties": "warn",

    // Require private members to be marked as readonly if they're never modified outside of the constructor
    "@typescript-eslint/prefer-readonly": "warn",

    // Enforce that this is used when only this type is returned
    "@typescript-eslint/prefer-return-this-type": "warn",

    // Enforce unbound methods are called with their expected scope
    "@typescript-eslint/unbound-method": "error",

    // Disallow duplicate class members
    "no-dupe-class-members":                    "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    // Allow some class methods without use of "this" inside
    "class-methods-use-this": [ "warn", { "exceptMethods": [ "selectors", "toEntity", "toApiRequest", "generateLocalKey" ]} ],
  },
}
