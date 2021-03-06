module.exports = {
  extends: [ 'umi', 'egg' ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: [
      'error',
      2,
      { SwitchCase: 1 },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    semi: 'off',
    'max-len': [
      'error',
      100,
      {
        comments: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-nested-ternary': [
      'error',
    ],
    'no-debugger': [
      'error',
    ],
    'no-console': [
      'error',
      {
        allow: [ 'warn' ],
      },
    ],
    'no-shadow': [
      'warn',
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  globals: {
    __root__dirname: true,
    Cookies: true,
    fetchMock: true,
    mockStore: true,
    initStore: true,
  },
}