import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

type ButtonProps = {
  playAgain?: boolean;
};

export const Button = styled.button<ButtonProps>`
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

export const QuestionsWrapper = styled.div`
  padding: 0 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.7vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.linkWater};
    border-radius: 6px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SummaryWrapper = styled.div`
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
