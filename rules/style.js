module.exports = require('eslint-config-airbnb-base/rules/style');

module.exports['rules']['indent'][0] = 2;
module.exports['rules']['max-len'] = [0, 10, 4, { ignoreUrls: true }];
module.exports['rules']['operator-linebreak'] = [1, 'after', {
  overrides: {
    '?': 'before',
    ':': 'before',
    '&&': 'ignore',
    '||': 'ignore',
    '=': 'ignore',
    '+': 'ignore'
  }
}];
module.exports['rules']['quotes'][0] = 0;
module.exports['rules']['quote-props'] = [0, 'consistent'];
module.exports['rules']['curly'] = [1, 'all'];
module.exports['rules']['strict'] = 0;
