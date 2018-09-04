module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'max-len': ['error', { 'code': 120 }],
    'react/jsx-sort-props': [1],
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
  }
};
