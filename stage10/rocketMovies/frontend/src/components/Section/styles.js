import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px;
    border-block-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.TEXT};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 20px;
    font-weight: 400;
  }
`