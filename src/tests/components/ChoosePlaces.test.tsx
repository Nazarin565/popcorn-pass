import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ChoosePlaces } from 'components';

import { fireEvent, render, screen } from 'tests/test-utils';

describe('Choose Places Component', () => {
  it('should render h5 title for details of selected film', () => {
    render(<ChoosePlaces />);

    const currentFilmElement = screen.getByRole('heading', { level: 5 });

    expect(currentFilmElement).toBeInTheDocument();
  });

  it('should render correct data about selected film', () => {
    window.history.pushState({}, '', '/choose-places?date=January 23&time=16:30');

    render(<ChoosePlaces />);

    const currentFilmElement = screen.getByRole('heading', { level: 5 });

    expect(currentFilmElement).toHaveTextContent('Test film on January 23, 16:30');

    window.history.pushState({}, '', '/');
  });

  it('should render error message if was error furing fetch', () => {
    const mockStore = configureMockStore();

    const store = mockStore({
      films: {
        loader: false,
        error: null,
        filmsList: [],
      },
      seats: {
        seats: [],
        loader: false,
        error: {
          message: 'Error during fetch seats',
        },
      },
    });

    render(
      <Provider store={store}>
        <ChoosePlaces />
      </Provider>
    );

    const errorElement = screen.getByTestId('fetchError');

    expect(errorElement).toBeInTheDocument();
  });

  it('should display error message', () => {
    const mockStore = configureMockStore();

    const store = mockStore({
      films: {
        loader: false,
        error: null,
        filmsList: [],
      },
      seats: {
        seats: [],
        loader: false,
        error: {
          message: 'Error during fetch seats',
        },
      },
    });

    render(
      <Provider store={store}>
        <ChoosePlaces />
      </Provider>
    );

    const errorElement = screen.getByTestId('fetchError');

    expect(errorElement).toHaveTextContent('Error during fetch seats');
  });

  it('should display error message with red color text', () => {
    const mockStore = configureMockStore();

    const store = mockStore({
      films: {
        loader: false,
        error: null,
        filmsList: [],
      },
      seats: {
        seats: [],
        loader: false,
        error: {
          message: 'Error during fetch seats',
        },
      },
    });

    render(
      <Provider store={store}>
        <ChoosePlaces />
      </Provider>
    );

    const errorElement = screen.getByTestId('fetchError');

    expect(errorElement).toHaveStyle({ color: 'red' });
  });

  it('should display correct number of places', () => {
    render(<ChoosePlaces />);

    const seatButtonElements = screen.getAllByTestId('seatButton');

    expect(seatButtonElements).toHaveLength(5);
  });

  it('should render button "Reserve" disabled by default', () => {
    render(<ChoosePlaces />);

    const reservedButton = screen.getByText('Reserve');

    expect(reservedButton).toBeDisabled();
  });

  it('should enable button after selecting a place', () => {
    render(<ChoosePlaces />);

    const reservedButton = screen.getByText('Reserve');
    const seatButtonElements = screen.getAllByTestId('seatButton');

    fireEvent.click(seatButtonElements[0]);

    expect(reservedButton).toBeEnabled();
  });
});
