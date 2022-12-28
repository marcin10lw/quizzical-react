import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 36px 0;
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Questions = styled.div``;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
  padding: 18px 30.5px;
  border: none;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.kashmirBlue};
  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.9;
  }
`;
