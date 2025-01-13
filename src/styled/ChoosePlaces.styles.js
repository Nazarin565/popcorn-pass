import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledBoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.borderColor};
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

export const Seat = styled(({ isReserved, isChosen, ...otherProps }) => <Button {...otherProps} />).attrs((props) => ({
  variant: 'outlined',
  disabled: props.isReserved,
}))`
  && {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    color: ${(props) => (props.isReserved ? props.theme.colors.mainText : props.theme.colors.headerText)};
    background-color: ${(props) =>
      props.isReserved
        ? props.theme.colors.reservedPlace
        : props.isChosen
        ? props.theme.colors.selectedPlace
        : props.theme.colors.availiablePlace};
    height: 30px;
    padding: 0 !important;
  }
`;

export const Screen = styled(Box)`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
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
