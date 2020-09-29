module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCovaregeFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/test/**'

  ],
  coverageDirectory: 'coverage',

}