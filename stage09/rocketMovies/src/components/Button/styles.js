import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)` 
  background: ${({ theme }) => theme.COLORS.BRAND};
  color: ${({ theme }) => theme.COLORS.TEXT2};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: .5;
  }

  > svg {
    margin-right: 8px;
  }
`