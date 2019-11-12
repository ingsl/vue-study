  module.exports = {
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "plugins": ["vue", "prettier"],
  "rules": {
    "no-undef": 0,
    "no-console": 1,
    "no-unused-vars": 1,
    "vue/html-self-closing": 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "tabWidth": 2,
        "printWidth": 120
      }
    ]
  }
}