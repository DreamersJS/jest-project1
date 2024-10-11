// jest.config.js
export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./setupTests.js'], 
  };
  