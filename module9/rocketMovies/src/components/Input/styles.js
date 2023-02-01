import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};  

  border-radius: 10px;
  margin-bottom: 8px;
  

  > input {
    width: 100%;
    height: 56px;

    padding: 17px;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    border: 0;
  } 

  > svg {
    margin-left: 16px;
  }
`