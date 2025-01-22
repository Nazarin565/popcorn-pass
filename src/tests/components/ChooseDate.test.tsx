import React from 'react';
import '@testing-library/jest-dom';

import { ChooseDate } from 'components';

import { createMatchMedia, fireEvent, render, screen } from '../test-utils';

describe('Choose Date Component', () => {
  it('should render h1', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const headingElement = screen.getByRole('heading', { level: 1 });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Popcorn Pass');
  });

  it('should contain name of the app', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const headingElement = screen.getByRole('heading', { level: 1 });

    expect(headingElement).toHaveTextContent('Popcorn Pass');
  });

  it('should handle setToday function', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(mockSetToday).toHaveBeenCalled();
  });

  it('should handle chooseFilm function', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(mockChooseFilm).toHaveBeenCalled();
  });

  it('should has an element with arrow', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    createMatchMedia('768px');

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const textWithArrowElement = screen.getByText(/choose available date/i);

    expect(textWithArrowElement).toBeInTheDocument();
  });

  it('should show a down arrow on small screen', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    createMatchMedia('768px');

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const textWithArrowElement = screen.getByText(/choose available date/i);

    expect(textWithArrowElement).toHaveTextContent('↓');
  });

  it('should show a right arrow on wide screen', () => {
    const mockSetToday = jest.fn();
    const mockChooseFilm = jest.fn();

    createMatchMedia('1268px');

    render(<ChooseDate handleSetToday={mockSetToday} scrollToChooseFilm={mockChooseFilm} />);

    const textWithArrowElement = screen.getByText(/choose available date/i);

    expect(textWithArrowElement).toHaveTextContent('→');
  });
});
