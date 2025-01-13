import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from 'styled-components';

import Root from './Root';

import GlobalStyles from './GlobalStyles';
import { theme } from './styled/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GlobalStyles />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </LocalizationProvider>
  </ThemeProvider>
);
