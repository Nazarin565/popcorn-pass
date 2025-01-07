import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const StyledBoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 24px;
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

export const Seat = styled(({ isReserved, isChosen, ...otherProps }) => (
  <Button {...otherProps} />
)).attrs((props) => ({
  variant: "outlined",
  disabled: props.isReserved,
}))`
  && {
    border: 1px solid #000;
    color: ${(props) => (props.isReserved ? "#000" : "#fff")};
    background-color: ${(props) =>
      props.isReserved ? "#cdcbcb" : props.isChosen ? "#36c838" : "#1976D2"};
    height: 30px;
  }
`;
