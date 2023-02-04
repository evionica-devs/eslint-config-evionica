exports.module = {
  plugins: [
    "import",
    "unused-imports",
    "unicorn",
    "promise",
    "eslint-plugin-eslint-comments",
  ],

  parserOptions: {
    ecmaVersion:         2022,
  },

  settings: {
    "import/resolver": {
      node:       true,
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    ...[
      "./base/arrays",
      "./base/async",
      "./base/codeSmells",
      "./base/comments",
      "./base/complexity",
      "./base/expressions",
      "./base/functions",
      "./base/globals",
      "./base/modules",
      "./base/objects",
      "./base/statements",
      "./base/style",
      "./base/temporary",
    ].map(require.resolve),
  ],

  overrides: [
    {
      "files": [ "**/index.ts" ],
      "rules": { "import/max-dependencies": "off" },
    },
    {
      "files": [ "**/*.config.{js,cjs,ts,mts}" ],
      "rules": {
        "import/no-default-export":                         "off",
        "max-lines-per-function":                           "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "import/max-dependencies":                          "off",
        "id-length":                                        "off",
        "eslint-comments/require-description":              "off",
        "unicorn/prevent-abbreviations":                    "warn",
        "new-cap":                                          "off",
        "multiline-comment-style":                          "off",
      },
    },
    {
      files: [ "**/*.{js,cjs}" ],
      rules: {
        "eslint-comments/require-description": "off",
        "import/no-commonjs":                  "off",
        "unicorn/prefer-module":               "off",
      },
    },
  ]
}
