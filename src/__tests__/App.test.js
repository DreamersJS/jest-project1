// src/__tests__/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the app component', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Vite \+ React/i });
  expect(headingElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
  
    // Initial count should be 0
    expect(buttonElement).toHaveTextContent('count is 0');
  
    // Click the button
    fireEvent.click(buttonElement);
  
    // Count should now be 1
    expect(buttonElement).toHaveTextContent('count is 1');
  });