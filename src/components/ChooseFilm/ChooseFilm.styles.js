import { Box } from "@mui/material";
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
