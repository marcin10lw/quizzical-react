import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  min-height: 800px;
  width: 100%;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 0px 13px 2px #b8b8b8;
  background-image: url(${`${process.env.PUBLIC_URL}/images/blob-top.png`}),
    url(${`${process.env.PUBLIC_URL}/images/blob-bottom.png`});
  background-repeat: no-repeat, no-repeat;
  background-size: 22%, 10%;
  background-position: top right, bottom left;
  background-color: ${({ theme }) => theme.colors.white};
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
        height: 100vh;
        min-height: auto;
      }
    `}
`;
