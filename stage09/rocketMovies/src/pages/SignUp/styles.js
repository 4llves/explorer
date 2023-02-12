import styled from "styled-components";
import backgroundImg from '../../assets/cinema.png'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`
export const Form = styled.form`  
  margin: 74px 134px 0 134px;
  width: 340px;
  height: 538px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.BRAND};
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  > h2 {    
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.SUBTITLE};

    margin: 48px 0;
  }
    
  > button:nth-last-child(2) {
    margin-top: 16px;
  }

  > button:nth-last-child(1) {
    margin-top: 42px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

export const ButtonSignIn = styled(Button)`
  margin-top: 24px;
`

export const ButtonBackLogin = styled(ButtonText)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
`