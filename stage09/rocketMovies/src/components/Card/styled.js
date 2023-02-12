import styled from "styled-components";
import { Tag } from "../Tag";

export const Container = styled.div`
  
  & + & {
    margin-top: 24px;
  }
  
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  

  width: 1120px; //ver depois de posso colocar 100%
  //height: 224px;
  
  border-radius: 16px;

  background: rgba(255, 133, 155, 0.05);

  .stars {
    display: flex;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    color: ${({ theme }) => theme.COLORS.SUBTITLE};
    margin-bottom: 8px;
  }  

  svg {
    color: ${({ theme }) => theme.COLORS.BRAND};
  }

  p {
    margin: 15px 0;    
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.TEXT_CARD};    
  }
`

export const TagCard = styled(Tag)`
  margin-top: 15px;
  margin-right: 8px;
`