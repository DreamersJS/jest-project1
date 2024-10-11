export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
      '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js', // Mock static files
    },
  };
  