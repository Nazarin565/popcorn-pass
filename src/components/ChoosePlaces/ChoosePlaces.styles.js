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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  gap: 8px;
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
    padding: 0 !important;
  }
`;

export const Screen = styled(Box)`
  border: 1px solid #000;
  padding-block: 16px;
  width: 90%;
  text-align: center;
`;

export const SeatsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const ChoosenSeatsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
`;
