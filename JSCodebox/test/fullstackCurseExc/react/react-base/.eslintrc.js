module.exports = {
  env: {
    es6: true,
    // eslint-disable-next-line prettier/prettier
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/first': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    camelcase: 0,
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    // 'react-hooks/rule-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'default-param-last': 0
  }
};
