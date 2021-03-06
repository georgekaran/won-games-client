module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/src'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',
    '!<rootDir>/src/pages/index.tsx',
    '!<rootDir>/src/**/*.stories.tsx',
    '!<rootDir>/src/styles/**'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setup.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig-test.json'
    }
  }
}
