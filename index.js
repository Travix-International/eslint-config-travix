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
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'max-len': ['error', {
      'code': 120,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
      'ignoreTrailingComments': true,
      'ignoreRegExpLiterals': true
    }],
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
    'react/jsx-sort-props': [1],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    "react/jsx-one-expression-per-line": 0,
  }
};
