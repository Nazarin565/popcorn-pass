import React from 'react';
import '@testing-library/jest-dom';

import App from 'App';

import { render, screen } from './test-utils';

describe('App component', () => {
  test('should render calendar', () => {
    render(<App />);
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });
});

export const fetchDataFromServer = jest.fn().mockResolvedValue({
  data: 'fake data',
});
