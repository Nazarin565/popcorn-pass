import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  background-color: beige;
`;

export const Wrapper = styled(Box)`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const StyledButton = styled(Button).attrs({
  variant: "outlined",
})`
  && {
    padding: 24px;
    border-radius: 12px;
  }
`;

export const StyledH5 = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-size: 28px;
    font-weight: 700;
    margin: 16px;
    color: #0c0c0c;
  }
`;

export const CurrentDate = styled.span`
  background-color: #f0f0f0;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 12px;
`;

export const DescriptionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 300px;
`;

export const StyledH6 = styled(Typography).attrs({
  variant: "h6",
})`
  text-align: center;
`;

export const FilmDescription = styled(Typography).attrs({
  variant: "body2",
})`
  overflow: hidden;
`;
