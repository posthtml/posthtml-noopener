# posthtml-noopener <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

`posthtml-noopener` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to add `rel="noopener noreferrer"` to links that open in a new tab.

Anchor links with the `target="_blank"` attribute [are recommended to include](https://developers.google.com/web/tools/lighthouse/audits/noopener) a `rel="noopener"` or `rel="noreferrer"` attribute to protect against cross-origin sites from exploiting `window.opener`. By default, this plugin includes both attribute values.

Read more about the [`rel="noopener"` attribute](https://mathiasbynens.github.io/rel-noopener/).

**Before:**

```html
<a href="http://example.com/" target="_blank">Link</a>
```

**After:**

```html
<a href="http://example.com/" target="_blank" rel="noopener noreferrer">Link</a>
```

## Install

```bash
yarn add -D posthtml-noopener
# OR
npm i posthtml-noopener
```

## Usage

```js
const fs = require('fs');
const posthtml = require('posthtml');
const { noopener } = require('posthtml-noopener');

const html = fs.readFileSync('./index.html');

posthtml()
  .use(noopener())
  .process(html)
  .then(result => fs.writeFileSync('./after.html', result.html));
```

## Contributing

See the [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-noopener.svg?color=blue
[npm-url]: https://npmjs.com/package/posthtml-noopener
[deps]: https://david-dm.org/metonym/posthtml-noopener.svg
[deps-url]: https://david-dm.org/metonym/posthtml-noopener
[build]: https://travis-ci.com/metonym/posthtml-noopener.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/posthtml-noopener
[codecov]: https://codecov.io/gh/metonym/posthtml-noopener
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/posthtml-noopener.svg
