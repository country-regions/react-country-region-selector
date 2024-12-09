/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  collectCoverage: true,
  coverageDirectory: 'temp/coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist/src/__tests__'],
};

module.exports = config;
