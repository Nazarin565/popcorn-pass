import React from 'react';
import '@testing-library/jest-dom';

import { ChooseDate } from 'components';

import { createMatchMedia, fireEvent, render, screen } from '../test-utils';

describe('Choose Date Component', () => {
  it('renders a heading with name of the app', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const headingElement = screen.getByRole('heading', { level: 1 });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Popcorn Pass');
  });

  it('renders a button for finding tickets for today and it handles functions', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(mockSetToday).toHaveBeenCalled();
    expect(mockChooseFilm).toHaveBeenCalled();
  });

  it('shows a down arrow on small screen', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    createMatchMedia('768px');

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const textWithArrowElement = screen.getByText(/choose available date/i);

    expect(textWithArrowElement).toBeInTheDocument();
    expect(textWithArrowElement).toHaveTextContent('↓');
  });

  it('shows a right arrow on wide screen', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    createMatchMedia('1268px');

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const textWithArrowElement = screen.getByText(/choose available date/i);

    expect(textWithArrowElement).toBeInTheDocument();
    expect(textWithArrowElement).toHaveTextContent('→');
  });
});
