import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  background-color: ${(props) => props.theme.colors.chooseFilmBackground};
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
  justify-content: center;
`;

export const StyledButton = styled(Button).attrs({
  variant: 'outlined',
})`
  && {
    padding: 24px;
    border-radius: 12px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      padding: 0;
    }
  }
`;

export const StyledH5 = styled(Typography).attrs({
  variant: 'h5',
})`
  && {
    font-size: 28px;
    font-weight: 700;
    margin: 16px;
    color: ${(props) => props.theme.colors.mainText};
    text-align: center;
  }
`;

export const CurrentDate = styled.span`
  background-color: ${(props) => props.theme.colors.background};
  padding: 4px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 12px;
  white-space: nowrap;
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
  variant: 'h6',
})`
  text-align: center;
`;

export const FilmDescription = styled(Typography).attrs({
  variant: 'body2',
})`
  overflow: hidden;
`;
