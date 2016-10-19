# eslint-config-travix

[![Build Status](https://img.shields.io/travis/Travix-International/eslint-config-travix/master.svg)](http://travis-ci.org/Travix-International/eslint-config-travix) [![npm](https://img.shields.io/npm/v/eslint-config-travix.svg)](https://www.npmjs.com/package/eslint-config-travix)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Travix International](https://travix.com)


## Install

```
$ npm install --save-dev eslint eslint-config-travix
```

For ES6 you'll also need Babel's [Core](https://www.npmjs.com/package/babel-core), ESLint [parser](https://github.com/babel/babel-eslint)
and [plugin](https://github.com/babel/eslint-plugin-babel):

```
$ npm install --save-dev babel-core babel-eslint eslint-plugin-babel eslint-plugin-import
```

For `react`, you will also need `eslint-plugin-react`:

```
$ npm install --save-dev eslint-plugin-react
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
  "name": "my-travix-project",
  "eslintConfig": {
    "extends": "travix"
  }
}
```

Or to `.eslintrc`:

```js
{
  "extends": "travix" // same as "travix/base"
}
```

### React

And [`travix/react`](react.js) if you want React application to be linted:

```json
{
  "extends": [
    "travix/base",
    "travix/react"
  ]
}
```

### Multiple configs

You can combine multiple configs together:

```json
{
  "extends": [
    "travix/rules/best-practices",
    "travix/rules/es6",
    "travix/rules/node",

    "travix/react"
  ]
}
```

## Note about Babel

In some cases, you may also be required to pass your custom `parser` in `.eslintrc` file:

```json
{
  "parser": "babel-eslint",
  "extends": "travix"
}
```

## Releasing

To publish a new version on npm, run:

```
$ make release VERSION=patch
```

Possible `VERSION` values include: `patch`, `minor`, `major`.

## License

MIT © [Travix International](https://travix.com)
