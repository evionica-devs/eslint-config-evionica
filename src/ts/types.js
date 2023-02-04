module.exports = {
  rules: {
    // Disallow void type outside of generic or return types.
    "@typescript-eslint/no-invalid-void-type": "error",

    // Disallow members of unions and intersections that do nothing or override type information
    "@typescript-eslint/no-redundant-type-constituents": "error",

    // Disallow type arguments that are equal to the default
    "@typescript-eslint/no-unnecessary-type-arguments": "error",

    // Disallow type assertions that do not change the type of an expression
    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    // Enforce using @ts-expect-error over @ts-ignore
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // Enforce constituents of a type union/intersection to be sorted alphabetically
    "@typescript-eslint/sort-type-constituents": "error",

    // Require consistently using either T[] or Array<T> for arrays
    "@typescript-eslint/array-type": "error",

    // Disallow unsafe declaration merging
    "@typescript-eslint/no-unsafe-declaration-merging": "error",

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
    "@typescript-eslint/consistent-generic-constructors": [ "error", "constructor" ],

    /*
     * ANY PROTECTION
     */
    // Disallow calling a function with a value with type any
    "@typescript-eslint/no-unsafe-argument": "error",

    // Disallow assigning a value with type any to variables and properties
    "@typescript-eslint/no-unsafe-assignment": "error",

    // Disallow calling a value with type any
    "@typescript-eslint/no-unsafe-call": "error",

    // Disallow member access on a value with type any
    "@typescript-eslint/no-unsafe-member-access": "error",

    // Disallow returning a value with type any from a function
    "@typescript-eslint/no-unsafe-return": "error",

    /*
     * ENUMS
     */
    // Disallow duplicate enum member values
    "@typescript-eslint/no-duplicate-enum-values": "error",

    // Disallow unnecessary namespace qualifiers
    "@typescript-eslint/no-unnecessary-qualifier": "error",

    // Require each enum member value to be explicitly initialized
    "@typescript-eslint/prefer-enum-initializers": "error",

    // Require all enum members to be literal values
    "@typescript-eslint/prefer-literal-enum-member": "error",
  },
}
