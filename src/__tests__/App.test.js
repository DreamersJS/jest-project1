// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the app component', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Vite \+ React/i });
  expect(headingElement).toBeInTheDocument();
});
