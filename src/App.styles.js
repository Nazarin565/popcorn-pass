import { Container } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";

export const MainContainer = styled(Container).attrs({
  disableGutters: true,
})`
  background-color: #f0f0f0;
  margin: 8px;
  height: 98vh;
  overflow-y: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  background-image: url(/bg-movie.avif);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  padding: 36px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`;

export const DateCalendarStyled = styled(DateCalendar)`
  && {
    margin: 0 0;
  }

  background-color: aliceblue;
`;
