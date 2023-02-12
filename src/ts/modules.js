module.exports = {
  rules: {
    // Enforce consistent usage of type exports
    "@typescript-eslint/consistent-type-exports": [ "error", { fixMixedExportsWithInlineTypeSpecifier: false } ],

    // Enforce consistent usage of type imports
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer:                  "type-imports",
        fixStyle:                "separate-type-imports",
        disallowTypeAnnotations: true,
      },
    ],

    // Require explicit return and argument types on exported functions' and classes' public class methods
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny:        false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions:                 true,
        allowTypedFunctionExpressions:             true,
        allowedNames:                              [],
      },
    ],

    // Disallow invocation of require()
    "@typescript-eslint/no-require-imports": "error",

    // Disallow empty exports that don't change anything in a module file
    "@typescript-eslint/no-useless-empty-export": "error",

    // Unfortunate, but we need to turn this off in monorepos
    "unicorn/prefer-node-protocol": "off",
  },
}
