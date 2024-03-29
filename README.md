# posthtml-noopener <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]

`posthtml-noopener` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to add `rel="noopener noreferrer"` to links that open in a new tab.

Anchor links with the `target="_blank"` attribute [are recommended to include](https://developers.google.com/web/tools/lighthouse/audits/noopener) a `rel="noopener"` or `rel="noreferrer"` attribute to [protect against cross-origin sites](https://mathiasbynens.github.io/rel-noopener/) from exploiting `window.opener`. By default, this plugin includes both attribute values.

**Before:**

```html
<a href="http://example.com/" target="_blank">Link</a>
```

**After:**

```html
<a href="http://example.com/" target="_blank" rel="noopener noreferrer">Link</a>
```

## Installation

```bash
# Yarn
yarn add -D posthtml-noopener

# NPM
npm i -D posthtml-noopener

# pnpm
pnpm i -D posthtml-noopener
```

## Usage

```js
const fs = require("fs");
const posthtml = require("posthtml");
const { noopener } = require("posthtml-noopener");

const html = fs.readFileSync("./index.html");

posthtml()
  .use(noopener())
  .process(html)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

## Contributing

See the [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-noopener.svg?color=blue
[npm-url]: https://npmjs.com/package/posthtml-noopener
