import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  border-bottom: 1.3px solid ${({ theme }) => theme.colors.grey};
  margin-bottom: 20px;

  h2 {
    font-size: 23px;
    font-weight: 700;
    font-family: "Karla", sans-serif;
    line-height: 27px;
    margin: 0;
    color: ${({ theme }) => theme.colors.rhino};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 17px;
  margin: 17px 0 22px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: 1.9px solid ${({ theme }) => theme.colors.kashmirBlue};
  min-width: 95px;
  border-radius: 13px;
  padding: 6px 10px;
  color: ${({ theme }) => theme.colors.rhino};
  font-weight: 500;
  font-size: 15px;
  word-break: break-word;
  cursor: pointer;
  background-color: transparent;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.linkWater};
      border-color: ${({ theme }) => theme.colors.linkWater};
    `}
`;
