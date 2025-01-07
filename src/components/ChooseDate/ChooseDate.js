import React from "react";
import dayjs from "dayjs";
import { StyledTypography, Wrapper } from "./ChooseDate.styles";
import { Button, Typography } from "@mui/material";
import { DateCalendarStyled } from "./ChooseDate.styles";

const ChooseDate = () => {
  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  return (
    <Wrapper>
      <StyledTypography variant="h1">Popcorn Pass</StyledTypography>
      <Typography variant="body2">
        Your easist way to find tickets in the cinema
      </Typography>
      <Button variant="contained">Find for today</Button>
      <Typography variant="body2">or</Typography>
      <Typography variant="h6">Choose a date</Typography>
      <DateCalendarStyled
        views={["day"]}
        defaultValue={dayjs(Date.now())}
        minDate={dayjs(Date.now())}
        maxDate={dayjs(maxDate)}
      />
    </Wrapper>
  );
};

export default ChooseDate;
