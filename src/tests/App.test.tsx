import React from 'react';
import { render, screen } from './test-utils';
import '@testing-library/jest-dom';

import App from 'App';

describe('App component', () => {
  test('renders calendar', () => {
    render(<App />);
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });
});

export const fetchDataFromServer = jest.fn().mockResolvedValue({
  data: 'fake data',
});
