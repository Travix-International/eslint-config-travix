module.exports = {
  plugins: [
    'promise',
  ],
  rules: {
    "promise/always-return": 'error',
    "promise/no-return-wrap": 'warn',
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "error",
    "promise/avoid-new": "off"
  }
};
