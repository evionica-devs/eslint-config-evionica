module.exports = {
  extends: [
    './ts',
  ],

  rules: {
    "unicorn/prefer-dom-node-text-content":             "warn",
    "camelcase":                                        "warn",
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

  overrides: [
    {
      files: [ "**/*.{js,cjs}" ],
      rules: {
        "eslint-comments/require-description": "off",
        "import/no-commonjs":                  "off",
        "unicorn/prefer-module":               "off",
      },
    },
  ],
}
