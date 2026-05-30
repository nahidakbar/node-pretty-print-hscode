# Releasing

1. Update `CHANGELOG.md`.
2. Run `npm test`.
3. Run `npm run typecheck`.
4. Run `npm pack --dry-run`.
5. Bump the version with `npm version patch`, `npm version minor`, or `npm version major`.
6. Publish with `npm publish`.

Use semver when choosing the version bump:

- Patch: documentation, metadata, or compatible bug fixes.
- Minor: backwards-compatible API additions.
- Major: breaking runtime behavior, package entry point, or type changes.
