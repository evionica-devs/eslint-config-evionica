module.exports = {
  parserOptions: {
    parser:  require.resolve("@typescript-eslint/parser"),
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        ".mts",
        ".cts",
      ],
    },
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
      node:       true,
    },
  },

  plugins: [ "@typescript-eslint", "eslint-plugin-tsdoc" ],

  extends: [
    "./base",
    "plugin:@typescript-eslint/recommended",
    ...[
      "./ts/arrays",
      "./ts/async",
      "./ts/codeSmells",
      "./ts/expressions",
      "./ts/functions",
      "./ts/modules",
      "./ts/objects",
      "./ts/statements",
      "./ts/style",
      "./ts/types",
      "./ts/temporary",
    ].map(require.resolve),
  ],
}
