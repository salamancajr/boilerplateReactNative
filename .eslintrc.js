module.exports = {
  env: {
    browser: true,
    es6: true,
    "react-native/react-native": true
  },

  "parser": "babel-eslint",
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 1,
    // Indent with 4 spaces
    "indent": ["error", 4],
    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],
    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],
  },
};
