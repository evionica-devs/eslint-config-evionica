module.exports = {
  rules: {
    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",

    // Reports if a resolved path is imported more than once
    "import/no-duplicates": "error",

    // TypeScript compilation already ensures that named imports exist in the referenced module
    "import/named": "off",

    // Reports funny business with exports, like repeated exports of names or defaults.
    "import/export": "error",

    // Reports use of a deprecated name, as indicated by a JSDoc block with a @deprecated tag
    "import/no-deprecated": "warn",

    // Forbids the use of mutable exports with var or let
    "import/no-mutable-exports": "error",

    // Reports use of an exported name as the locally imported name of a default export
    "import/no-named-as-default": "error",

    // Forbid use of exported name as property of default export
    "import/no-named-as-default-member": "error",

    // Forbid AMD require and define calls
    "import/no-amd": "error",

    // Forbid CommonJS require calls and module.exports or exports.*
    "import/no-commonjs": "error",

    // Forbid import statements with CommonJS module.exports
    "import/no-import-module-exports": "warn",

    // Ensure a default export is present, given a default import
    "import/default": "error",

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/namespace": "error",

    // Forbid import of modules using absolute paths
    "import/no-absolute-path": "error",

    // Forbid a module from importing a module with a dependency path back to itself
    "import/no-cycle": "error",

    // Forbid a module from importing itself
    "import/no-self-import": "error",

    // Ensure imports point to a file/module that can be resolved
    "import/no-unresolved": [
      "error",
      {
        ignore: [
          "virtual:.*$",
          "~pages$",
          "~icons.*$",
        ],
      },
    ],

    // Forbid unnecessary path segments in import and require statements
    "import/no-useless-path-segments": "error",

    // Forbid webpack loader syntax in imports
    "import/no-webpack-loader-syntax": "error",

    // Ensure all exports appear after other statements
    "import/exports-last": "off",

    // Ensure all imports appear before other statements
    "import/first": "error",

    // Prefer named exports to be grouped together in a single export declaration
    "import/group-exports": "off",

    // Forbid default exports
    "import/no-default-export": "error",

    // Forbid named default exports
    "import/no-named-default": "error",

    // Enforce a convention in module import order
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "type",
          "internal",
          "index",
          "parent",
          "sibling",
          "object",
        ],
      },
    ],

    // Enforce removal unused es6 module imports
    "unused-imports/no-unused-imports": "error",

    // Unfortunate, but we need to turn this off in monorepos
    "unicorn/prefer-node-protocol":                     "off",
  },
}
