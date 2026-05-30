# Changelog

## 0.1.0

- Modernized package metadata with `exports` and TypeScript declarations.
- Replaced the legacy `jbn` test flow with Node's built-in test runner.
- Added runtime argument validation.
- Added support for options object syntax: `prettyPrintHsCode(code, { showLabel, isItem })`.
- Preserved the original boolean API: `prettyPrintHsCode(code, showLabel, isItem)`.
- Removed generated `lib` output from the published package.
