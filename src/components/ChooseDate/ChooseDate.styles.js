import { Box, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 12px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const DateCalendarStyled = styled(DateCalendar)`
  margin: 0 !important;
  background-color: aliceblue;
`;
