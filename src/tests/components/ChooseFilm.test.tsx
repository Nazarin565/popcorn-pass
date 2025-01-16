import React from 'react';
import { fireEvent, render, screen } from 'tests/test-utils';

import { ChooseFilm } from 'components';
import dayjs from 'dayjs';

describe('Choose Film Component', () => {
  it('displays correct date', () => {
    render(<ChooseFilm />);

    const selectedDateElement = screen.getByRole('time');
    const todayDate = dayjs().format('MMMM D');

    expect(selectedDateElement).toBeInTheDocument();
    expect(selectedDateElement).toHaveTextContent(todayDate);
  });

  it('displays correct date from search params', () => {
    window.history.pushState({}, '', '/?date=January 23');

    render(<ChooseFilm />);

    const selectedDateElement = screen.getByRole('time');

    expect(selectedDateElement).toBeInTheDocument();
    expect(selectedDateElement).toHaveTextContent('January 23');

    window.history.pushState({}, '', '/');
  });
});

it('displays message when no films are availiable', () => {
  const mockState = {
    loader: false,
    error: false,
    filmsList: [],
  };

  render(<ChooseFilm />, { initialState: mockState });

  const selectedDateElement = screen.getByText('Any films for this day. Try another day!');

  expect(selectedDateElement).toBeVisible();
});

it('handles all buttons which redurect user to selecting places', async () => {
  const mockClickHandler = jest.fn();

  render(<ChooseFilm />);

  const buttonLinkElements = await screen.findAllByTestId('timePickerButton');

  buttonLinkElements.forEach((button) => {
    fireEvent.click(button);

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
