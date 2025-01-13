import { Container, Grid2 } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

import styled from 'styled-components';

export const MainContainer = styled(Container).attrs({
  disableGutters: true,
})`
  background-color: ${(props) => props.theme.colors.background};
  margin: 4px;
  height: 99vh;
  overflow-y: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled(Grid2).attrs({
  container: true,
  spacing: 1.5,
  justifyContent: 'space-around',
})`
  background-image: url(/bg-movie.avif);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 36px;
`;

export const DateCalendarStyled = styled(DateCalendar)`
  && {
    margin: 0 0;
  }

  background-color: ${(props) => props.theme.colors.calendarBackground};
`;
