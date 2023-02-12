import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND2};
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_INPUT}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.BRAND};    
  }

  > input {
    border-radius: 10px;
    height: 56px;
    width: 100%;
    
    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    }
  }

`