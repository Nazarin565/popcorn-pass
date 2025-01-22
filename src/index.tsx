import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Root from './Root';

import GlobalStyles from './tests/GlobalStyles';
import { theme } from './styled/theme';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <GlobalStyles />
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>
);
