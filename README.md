# React Testing without Jest

Keeping things simple and lean

## Usage

### Creating Snapshots

- `npm run test:snapshot` to generate new snapshots!
### Testing

- `npm run test` for a regular test
- `npm run test:watch` watch your project for changes to test files and the program files that they cover

### Coverage

- `npm run test:100` for a test with code coverage
- `npm run test:report` to see the open coverage report in a browser window

## Why not Jest?

There are various problems with Jest:

- Takes over Node.js globals! :fire:
- It runs tests in copied/hacked Node.js environment which introduces some issues (not patchable)
    `stdout` and `stderr` are output of out sync [facebook/jest#6718](https://github.com/facebook/jest/issues/6718)
    - Some public Node.js API's are replaced with non standard alternatives -> [facebook/jest#6725](https://github.com/facebook/jest/issues/)6725
    - Due to non standard and uneven modules cache handling it's prone to OOM errors: [facebook/jest#6399 (comment)](https://github.com/facebook/jest/issues/6399#issuecomment-415083479)
- Tests progress is not output until tests finalize, which is inconvenient in long going tests (as integration ones) -> [facebook/jest#6616](https://github.com/facebook/jest/issues/6616) (not easily patchable)
- Any stdout/stderr output is hidden until test finalizes -> [facebook/jest#5281 (patchable with `useStderr` option)](https://github.com/facebook/jest#5281 (patchable with useStderr/issues/)option)
- Default runner exposes various bugs (patchable via using alternative `jest-circus` runner)
    - Crashes in `beforeAll` do not prevent execution of tests -> [facebook/jest#2713](https://github.com/facebook/jest/issues/2713), [facebook/jest#6695](https://github.com/facebook/jest/issues/6695)
    - Crashes in `afterAll` are not exposed -> [facebook/jest#6692](https://github.com/facebook/jest/issues/)6692
    - `only` and `skip` are not fully respected -> [facebook/jest#4166](https://github.com/facebook/jest/issues/)4166
- Source code is result of transpilation which makes it more difficult to debug eventual issues
