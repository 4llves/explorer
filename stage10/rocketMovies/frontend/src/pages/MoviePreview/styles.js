import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
  
`
export const Content = styled.div`
  width: 1120px;
  margin: 0 auto 156px auto;

  > main {
    overflow-y: auto;
  }

  header {
    margin-top: 40px;

    button {      
      margin-bottom: 24px;      
    }

    .title {
      h1 {
        margin-right: 19px;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.BRAND};
        font-size: 20px;
      }

      display: flex;
      align-items: center;      
      flex-direction: row;      
    }

    .subtitle {
      height: 20px;
      margin-top: 24px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;

      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme.COLORS.BRAND};        
      }

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #3e3b47;
      }
    }

    .tags {
      display: flex;
      flex-direction: row;      
      margin-top: 40px;
      gap: 8px;
    }
  }

  > p {
    margin-top: 40px;
    text-align: justify;
  }  
`