module.exports = {
  rules: {
    // Enforce a maximum cyclomatic complexity allowed in a program
    "complexity": [ "error", 9 ],

    // Enforce a maximum depth that blocks can be nested
    "max-depth": [ "error", 6 ],

    // Enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": [ "error", 4 ],

    // Enforce a maximum number of lines per file
    "max-lines": [ "error", { max: 400, skipBlankLines: true, skipComments: true } ],

    // Enforce a maximum number of lines of code in a function
    "max-lines-per-function": [ "error", { "max": 40, "skipBlankLines": true, "skipComments": true, "IIFEs": false } ],

    // Enforce a maximum number of statements allowed in function blocks
    "max-statements": [ "error", 20 ],

    // Enforce a maximum number of statements allowed per line
    "max-statements-per-line": [ "error", { "max": 2 } ],

    // Enforce a maximum number of parameters in function definitions
    "max-params": [ "error", 3 ],

    // Enforce the maximum number of dependencies a module can have
    "import/max-dependencies": [
      "error",
      {
        "max":               10,
        "ignoreTypeImports": true,
      },
    ],

    "unicorn/no-array-reduce": "warn",
  },
}
