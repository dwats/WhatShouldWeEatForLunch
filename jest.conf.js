module.exports = {
  automock: false,
  restoreMocks: true,
  collectCoverage: true,
  testEnvironment: 'node',
  testRegex: '__tests__/.*\\.test\\.js$',
  coverageReporters: [
    'json-summary',
    'lcov',
    'text'
  ],
  coverageDirectory: 'reports/coverage'
}
