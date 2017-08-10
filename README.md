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

For the ES6 `promises`, it is required to install [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)

```
$ npm install --save-dev eslint-plugin-promises
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

### Promises

And [`travix/promises`](promises.js)

```json
{
  "extends": [
    "travix/base",
    "travix/promises",
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
    "travix/promises",
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

## Changelogs

Changelogs are generated using the `github_changelog_generator` gem.

Make sure you have Ruby v2.2+:

```
$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
$ curl -sSL https://get.rvm.io | bash -s stable

$ rvm install 2.2.2
```

Then install the gem:

```
$ gem install github_changelog_generator
```

Now you can generate `CHANGELOG.md` file automatically by running:

```
$ make changelog GITHUB_API_TOKEN="YOUR_GITHUB_TOKEN"
```

### GitHub API Token

You can generate a token [here](https://github.com/settings/tokens/new?description=GitHub%20Changelog%20Generator%20token)

Since this is a public repository, you only need `public_repo` access for the token.

### Pushing `CHANGELOG.md`

Once the `CHANGELOG.md` file is generated, it is up to you to commit and push it to GitHub.

There is a handy command available:

```
$ make push-changelog
```

## License

MIT © [Travix International](https://travix.com)
