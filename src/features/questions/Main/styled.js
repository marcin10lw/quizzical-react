import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  padding: 55px 0 40px;
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  padding: 18px 30.5px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.kashmirBlue};
  cursor: pointer;
  transition: opacity 150ms ease-in-out;

  ${({ playAgain }) =>
    playAgain &&
    css`
      width: 100%;
      padding: 18px 40px;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    gap: 10px;
  }
`;

export const Score = styled.span`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.rhino};

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    padding-top: 30px;
  }
`;
