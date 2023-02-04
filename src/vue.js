module.exports = {
  extends: [
    "./base",
    "plugin:vue/vue3-recommended",
    "./ts",
  ],

  plugins: [ "vue" ],

  env:           { "vue/setup-compiler-macros": true },

  parser:        require.resolve("vue-eslint-parser"),

  parserOptions: {
    parser:       require.resolve("@typescript-eslint/parser"),
    ecmaFeatures: { jsx: true },
    extraFileExtensions: [ ".vue" ],
  },

  rules: {
    "import/no-default-export":       "off",
    "unicorn/prefer-top-level-await": "off",
  },

  overrides: [
    {
      "files": [ "**/views/**/*.vue" ],
      "rules": {
        "vue/multi-word-component-names": "off",
        "unicorn/filename-case":          "off",
      },
    },
  ]
}
