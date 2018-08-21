# eslint-config-travix
[ESLint](https://eslint.org/) configuration for Travix International (v.5)

## What this config extends
* `eslint:recommended`
* `airbnb`
* `plugin:react/recommended`
* `plugin:import/errors`
* `plugin:import/warnings`
* `plugin:jsx-a11y/recommended`

## Installation
This configuration requires a list of peer dependencies installed also. You can install the main package and all of the peer dependencies within the following command:
```
npx install-peerdeps -d eslint-config-travix
```

## Usage
You can create a `.eslintrc` file with the following content:
```
{
  "extends": "travix"
}
```
Or specify eslint config in your `package.json` file:
```
{
  ...
  "eslintConfig": {
    "extends": "travix"
  }
}
```

## Release
Releases are doing automatically. We use [`semantic-release`](https://github.com/semantic-release/semantic-release) running on CI (Estafette). It triggers on every push/merge to `master` branch. Commit message should follow a pattern to trigger release, otherwise release will not be done.

### Pattern for commit messages
We use [simple-commit-message](https://github.com/bahmutov/simple-commit-message) to simplify commit messages. Here is a pattern:
* `fix: <MESSAGE>` - does release `patch` version of NPM module. Alias - `patch: <MESSAGE>`
* `minor: <MESSAGE>` - releases `minor` version. Alias - `feat: <MESSAGE>`
* `major: <MESSAGE>` - releases `major` version. Alias - `break: <MESSAGE>`
