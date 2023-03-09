import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};  

  border: none;
  resize: none;

  margin: 40px 0;
  border-radius: 10px;

  padding: 19px 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  }
`