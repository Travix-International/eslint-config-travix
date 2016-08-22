module.exports = require('eslint-config-airbnb-base/rules/best-practices');

module.exports['rules']['no-case-declarations'] = 0;
module.exports['rules']['no-param-reassign'] = 0;
module.exports['rules']['no-unused-expressions'] = [2, { allowShortCircuit: true, allowTernary: true }];
