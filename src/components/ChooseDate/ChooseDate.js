import React from "react";
import {
  StyledButton,
  StyledH1,
  StyledH6,
  StyledParagraph,
  Wrapper,
} from "./ChooseDate.styles";
import { useMediaQuery } from "@mui/material";

const ChooseDate = ({ handleSetToday, scrollToChooseFilm }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Wrapper>
      <StyledH1>Popcorn Pass</StyledH1>
      <StyledH6>Your easist way to find tickets in the cinema</StyledH6>
      <StyledButton
        onClick={() => {
          handleSetToday();
          scrollToChooseFilm();
        }}
      >
        Find for today
      </StyledButton>
      <StyledParagraph variant="body2">or</StyledParagraph>
      <StyledH6>Choose availiable date {isMobile ? "↓" : "→"}</StyledH6>
    </Wrapper>
  );
};

export default ChooseDate;
