    1. Install Jest and testing libraries

npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest jest-environment-jsdom

    2. Install Babel and necessary plugins

npm install --save-dev @babel/preset-env @babel/preset-react @babel/core

    3. Set up Babel
Create a .babelrc file in the root 
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

    4. Create Jest Configuration: 
Create a jest.config.js file in the root
   export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./setupTests.js'],
    or
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
      '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js', // Mock static files
    },
  };
  
    5. Add a setupTests.js
// setupTests.js
import '@testing-library/jest-dom';

    6. Add a Test Script to package.json
    7. use import React from 'react'; at top of component and test(App.jsx and App.test.js)
    8. Jest doesn't know how to handle non-JavaScript files so: 
Create a __mocks__/fileMock.js
// __mocks__/fileMock.js
 export default 'test-file-stub';

npm install --save-dev identity-obj-proxy



Jest automatically looks for test files in specific places by default. It searches for files with the following patterns:

    Files located inside a folder named __tests__.
    Files with names ending in .test.js, .test.jsx, .test.ts, or .test.tsx.