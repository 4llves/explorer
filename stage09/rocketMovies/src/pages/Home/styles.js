import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;  
`

export const Top = styled.div`
  margin: 48px auto 38px auto;
  width: 1120px;

  > div {    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }
      
    > button {
      width: 207px;
    }
  }
`

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
`