import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import dayjs from 'dayjs';

import { ChooseFilm } from 'components';

import { fireEvent, render, screen } from 'tests/test-utils';

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

  it('displays message when no films are availiable', () => {
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
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <ChooseFilm />
      </Provider>
    );

    const selectedDateElement = screen.getByText('Any films for this day. Try another day!');

    expect(selectedDateElement).toBeVisible();
  });

  it('handles all buttons which redurect user to selecting places', () => {
    const onClickSpy = jest.spyOn(React, 'useCallback').mockImplementation((fn) => fn);

    render(<ChooseFilm />);

    const buttonLinkElements = screen.getAllByTestId('timePickerButton');

    buttonLinkElements.forEach((button) => {
      fireEvent.click(button);

      expect(onClickSpy).toHaveBeenCalled();
    });

    onClickSpy.mockRestore();
  });
});
