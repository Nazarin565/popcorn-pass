import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

export const StyledH1 = styled(Typography).attrs({
  variant: 'h1',
})`
  && {
    font-size: 4rem;
    font-weight: 700;
  }
  text-align: center;
  color: ${(props) => props.theme.colors.headerText};
`;

export const StyledParagraph = styled(Typography).attrs((props) => ({
  $variant: props.variant || 'body1',
}))`
  color: ${(props) => props.theme.colors.headerText};
`;

export const StyledH6 = styled(Typography).attrs({
  variant: 'h6',
})`
  && {
    font-size: 1.5rem;
    font-weight: 500;
  }
  text-align: center;
  color: ${(props) => props.theme.colors.headerText};
`;

export const StyledButton = styled(Button).attrs({
  variant: 'contained',
})`
  && {
    padding: 14px;
    border-radius: 32px;
  }
`;
