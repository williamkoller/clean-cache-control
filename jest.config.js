module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transforma: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir/src/$1>'
  }
}