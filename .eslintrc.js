const { before } = require('lodash')

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    semi: [2, 'never'],
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'double', { allowTemplateLiterals: true }],
    'multiline-ternary': ['error', 'never'],
  },
}
