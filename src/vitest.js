module.exports = {
  extends: [
    "./ts",
  ],

  rules: {
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-array-callback-reference": "off",
    "import/first": "off",
    "max-lines-per-function": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/no-misused-promises": "error",
    "max-classes-per-file": "off",
    "max-nested-callbacks": ["warn", { "max": 6 }],
    "line-comment-position": "warn",
    "import/max-dependencies": ["warn", { "max": 10 }],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "unicorn/no-null": "warn",
    "unicorn/consistent-function-scoping": "off",
    "multiline-comment-style": "off",
    "unicorn/no-array-reduce": "warn",
    "max-statements": ["warn", 20],
    "import/order": "off",
    "max-params": ["error", 5],
    "max-lines-per-function": "off",
    "unicorn/no-unsafe-regex": "off",
    "max-lines": "off",
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    // Unfortunate, but we need to turn this off in monorepos
    "unicorn/prefer-node-protocol": "off",
  },

  overrides: [
    {
      files: ["**/*.{js,cjs}"],
      rules: {
        "eslint-comments/require-description": "off",
        "import/no-commonjs": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
}
