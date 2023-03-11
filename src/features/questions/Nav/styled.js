import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
`;

export const Header = styled.h1`
  font-family: "Karla", sans-serif;
  font-size: 45px;
  color: ${({ theme }) => theme.colors.rhino};
`;

export const StartButton = styled.button`
  font-size: 23px;
  margin-top: 20px;
  padding: 23px 40.6px;
  width: 280px;
  border: none;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.kashmirBlue};
  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.9;
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.rhino};
`;

export const Paragraph = styled.p`
  margin: 8px 0;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.kashmirBlue};
`;
