module.exports = {
  rules: {
    // Disallow calling some Object.prototype methods directly on objects
    "no-prototype-builtins": "warn",

    // Disallow extending native types
    "no-extend-native": "error",
  },
}
