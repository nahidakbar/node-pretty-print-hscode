# pretty-print-hscode

Pretty print Harmonized System (HS) codes.

HS codes are best stored without dots or labels for processing, but that form is
harder to scan. This library adds the conventional separators and optional labels.

## Install

```sh
npm install pretty-print-hscode
```

## Usage

```js
const prettyPrintHsCode = require("pretty-print-hscode");

prettyPrintHsCode("010203");
// "0102.03"

prettyPrintHsCode("01020304", true);
// "Subheading 0102.03.04"

prettyPrintHsCode("01020304", { showLabel: true, isItem: true });
// "Item 0102.03.04"

prettyPrintHsCode("0102.03");
// "0102.03"

prettyPrintHsCode("I", { showLabel: true });
// "Section I"
```

The package includes TypeScript declarations and supports the original boolean
API: `prettyPrintHsCode(code, showLabel, isItem)`.

## API

### `prettyPrintHsCode(code, options)`

```ts
prettyPrintHsCode(code: string, showLabel?: boolean, isItem?: boolean): string;
prettyPrintHsCode(code: string, options?: { showLabel?: boolean; isItem?: boolean }): string;
```

Non-digit separators in numeric HS codes are ignored before formatting.
Non-numeric section codes such as `"I"` are returned unchanged, with an optional
`Section` label. Invalid argument types throw `TypeError`.

## Development

```sh
npm test
npm run typecheck
npm pack --dry-run
```

See [RELEASING.md](./RELEASING.md) before publishing a new version.
