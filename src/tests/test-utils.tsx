import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import mediaQuery from 'css-mediaquery';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styled/theme';
import GlobalStyles from 'GlobalStyles';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

const mockStore = configureStore();

let store: any;

beforeEach(() => {
  store = mockStore({
    films: {
      loader: false,
      error: null,
      filmsList: [
        {
          id: 1,
          filmName: 'Film 1',
          timeSlots: ['10:00', '12:00', '14:00', '16:00'],
          description: 'Description 1',
          img: 'img1.jpg',
        },
      ],
      currentFilm: 'Test film'
    },
    seats: {
      seats: [
        { id: '1', name: '1', isReserved: false },
        { id: '2', name: '2', isReserved: true },
        { id: '3', name: '3', isReserved: true },
        { id: '4', name: '4', isReserved: false },
        { id: '5', name: '5', isReserved: true },
      ],
      loader: false,
      error: null,
    },
  });

  store.dispatch = jest.fn();
});

type Props = {
  children: ReactNode;
};

const MockElem: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <GlobalStyles />
        <BrowserRouter>{children}</BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>
);

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, { wrapper: MockElem, ...options });
};

export * from '@testing-library/react';
export { customRender as render };

// Function for testing on different screen size
export function createMatchMedia(width: string) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: mediaQuery.match(query, { width }),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
