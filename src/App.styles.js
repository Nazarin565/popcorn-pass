import { Container } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

import styled from "styled-components";

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

export const Header = styled.header`
  background-image: url(/bg-movie.avif);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

export const DateCalendarStyled = styled(DateCalendar)`
  && {
    margin: 0 0;
  }

  background-color: aliceblue;
`;
