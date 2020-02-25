import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Orders list', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Orders List/i);
  expect(linkElement).toBeInTheDocument();
});
