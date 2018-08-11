module.exports = {
  "extends": "standard",
  "env": {
    "mocha": true,
    "node": true
  },
    "settings": {
    "import/core-modules": ["aws-sdk"]
  },
    "globals": {
    "after": true,
    "afterAll": true,
    "afterEach": true,
    "before": true,
    "beforeAll": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "it": true,
    "jest": true,
    "test": true
  }
}
