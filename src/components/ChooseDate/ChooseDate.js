import React from "react";
import { useMediaQuery } from "@mui/material";
import { useSearchParams } from "react-router";
import { useTheme } from "styled-components";

import {
  StyledButton,
  StyledH1,
  StyledH6,
  StyledParagraph,
  Wrapper,
} from "../../styled/ChooseDate/ChooseDate.styles";

const ChooseDate = ({ handleSetToday, scrollToChooseFilm }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChooseToday = () => {
    searchParams.delete("date");
    setSearchParams(searchParams);
    scrollToChooseFilm();
    handleSetToday();
  };

  return (
    <Wrapper>
      <StyledH1>Popcorn Pass</StyledH1>
      <StyledH6>Your easist way to find tickets in the cinema</StyledH6>
      <StyledButton onClick={handleChooseToday}>Find for today</StyledButton>
      <StyledParagraph variant="body2">or</StyledParagraph>
      <StyledH6>Choose availiable date {isTablet ? "↓" : "→"}</StyledH6>
    </Wrapper>
  );
};

export default ChooseDate;
