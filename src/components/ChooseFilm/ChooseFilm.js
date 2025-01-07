import React from "react";
import { Wrapper, Container, ButtonsWrapper } from "./ChooseFilm.styles";
import { Button } from "@mui/material";

const ChooseFilm = () => {
  return (
    <Container>
      <Wrapper>
        <ButtonsWrapper>
          <Button variant="outlined">10:00</Button>
          <Button variant="outlined">12:00</Button>
          <Button variant="outlined">14:00</Button>
          <Button variant="outlined">16:00</Button>
          <Button variant="outlined">18:00</Button>
          <Button variant="outlined">20:00</Button>
        </ButtonsWrapper>
        <img src="https://via.placeholder.com/200x300" alt="" />
      </Wrapper>
      <Wrapper>
        <ButtonsWrapper>
          <Button variant="outlined">10:00</Button>
          <Button variant="outlined">12:00</Button>
          <Button variant="outlined">14:00</Button>
          <Button variant="outlined">16:00</Button>
          <Button variant="outlined">18:00</Button>
          <Button variant="outlined">20:00</Button>
        </ButtonsWrapper>
        <img src="https://via.placeholder.com/200x300" alt="" />
      </Wrapper>
    </Container>
  );
};

export default ChooseFilm;
