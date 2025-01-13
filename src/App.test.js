/**
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello world header', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { role: 'h1' });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Hello world');
});
 */
