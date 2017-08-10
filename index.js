module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    './base',
    './react',
    './promises',
  ].map(require.resolve),
  rules: {},
  settings: {
    react: {
      pragma: 'React'
    }
  }
};
