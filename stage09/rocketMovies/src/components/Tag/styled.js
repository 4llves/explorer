import styled from "styled-components";

export const Container = styled.span`
  
  
  padding: 5px 16px;  
  
  border-radius: 8px;
  
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.TAG_TEXT};
  text-align: center;
  font-family: 'Roboto', sans-serif;


  background: ${({ theme }) => theme.COLORS.TEXT2};
`