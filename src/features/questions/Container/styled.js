import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    border-radius: 0;
  }

  ${({ started, status }) =>
    (!started || status) &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}px) {
        /* height: 100vh;
        min-height: auto; */
      }
    `}
`;
