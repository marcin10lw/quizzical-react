import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 65px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Questions = styled.div``;

export const Button = styled.button`
  font-size: 16.8px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.white};
  padding: 20px 36px;
  border: none;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.kashmirBlue};
  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.9;
  }
`;
