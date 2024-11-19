module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    },
  },
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/first': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    camelcase: 0
  }
};
