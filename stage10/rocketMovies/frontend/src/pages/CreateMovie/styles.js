import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
`

export const Form = styled.form`
  width: 1137px;
  
  margin: 40px auto;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.TEXT_CARD};
    margin-bottom: 24px;
  }

  > header {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    
    h1 {
      margin-bottom: 40px;
    }
  }

  .top {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
  
  .tags {
    display: flex;    
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 24px;
    height: 88px;

    border-radius: 8px;
    flex-wrap: wrap;
    margin-bottom: 40px;    

    background: ${({ theme }) => theme.COLORS.BACKGROUND3};    
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
  }
`
export const ButtonDelete = styled(Button)`
  background-color:   ${({ theme }) => theme.COLORS.BACKGROUND3};
  color: ${({ theme }) => theme.COLORS.BRAND};
`