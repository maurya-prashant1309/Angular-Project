/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": "ts-jest",
  },
  roots: [
    '<rootDir>/test'
  ],
  testMatch: ['**/*.test.ts'],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100
    }
  }
};