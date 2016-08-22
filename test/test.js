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

    const errors = runEslint('\'use strict\';\nconsole.log("travix international")\n', conf);

    t.is(errors[0].ruleId, 'no-console');
    t.is(errors[1].ruleId, 'semi');
});
