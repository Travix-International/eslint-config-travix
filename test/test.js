import test from 'ava';
import isPlainObj from 'is-plain-obj';
import eslint from 'eslint';
import tempWrite from 'temp-write';

function runEslint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(str).results[0].messages;
}

test('main', (t) => {
    const conf = require('../');

    t.true(isPlainObj(conf));
    t.true(isPlainObj(conf.env));
    t.true(isPlainObj(conf.rules));

    const errors = runEslint('\n\'use strict\';\n\nconsole.log("travix international")\n', conf);

    t.is(errors[0].ruleId, 'no-console');
    t.is(errors[1].ruleId, 'semi');
});

test('travix-specific', (t) => {
    const conf = require('../');

    const errors = runEslint('if (err) alert(\'curly\');', conf);

    // These are Travix-specific errors, which don't come from airbnb, so this tests if our custom rules are picked up.
    t.is(errors[0].ruleId, 'curly');
    t.is(errors[0].severity, 1);
});

test('promises', (t) => {
  const conf = require('../');

  const errors = runEslint('\n\'use strict\';\n\nconst t = () => new Promise((r, re) => {\n  console.log(re);\n  r();\n});\nt.then(r => { console.log(r); r(); });\n', conf);

  t.is(errors[0].ruleId, 'promise/param-names');
  t.is(errors[0].severity, 2);

  t.is(errors[2].ruleId, 'promise/catch-or-return');
  t.is(errors[2].severity, 2);

  t.is(errors[4].ruleId, 'promise/always-return');
  t.is(errors[4].severity, 2);
});
