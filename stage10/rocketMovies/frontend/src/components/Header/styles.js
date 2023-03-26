import styled from "styled-components";
import { ButtonText } from "../ButtonText";

export const Container = styled.div`
  grid-area: header;  
    
  display: flex;
  flex-direction: row;
  align-items: center;  
  padding: 24px 123px;
  gap: 64px;
  justify-content: space-between;

  width: 100%;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_COLOR};

  > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.BRAND};
  }  
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 125px;
    
    strong {
      text-align: right;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      
      color: ${({ theme }) => theme.COLORS.SUBTITLE};      
    }       
  }
  
  img {    
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};    
  }
`

export const ButtonSair = styled(ButtonText)`
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
`