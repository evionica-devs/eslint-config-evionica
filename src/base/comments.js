module.exports = {
  rules: {
    // Enforce a particular style for multiline comments
    "multiline-comment-style": [ "error", "starred-block" ],

    // Enforce consistent spacing after the // or /* in a comment
    "spaced-comment": [
      "error",
      "always",
      { "markers": [ "/" ]},
    ],

    // Enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": [
      "error",
      "always",
      {
        ignorePattern:             "eslint|c8|prettier|ts-expect-error|ts-ignore",
        ignoreInlineComments:      true,
        ignoreConsecutiveComments: true,
      },
    ],

    // Enforce position of line comments
    "line-comment-position": [ "error", { "position": "above" } ],

    // Require empty lines around comments
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": true,
        "afterBlockComment":  false,
        "beforeLineComment":  false,
        "afterLineComment":   false,
      },
    ],
  },
}
