import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.BRAND};

  border: none;
  font-size: 16px;

  display: flex;
  align-items: center;  

  > svg {
    margin-right: 8px;
  }
`