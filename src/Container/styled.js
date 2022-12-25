import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  min-height: 800px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 1px #afafaf;
  background-image: url(${`${process.env.PUBLIC_URL}/images/blob-top.png`}),
    url(${`${process.env.PUBLIC_URL}/images/blob-bottom.png`});
  background-repeat: no-repeat, no-repeat;
  background-size: 22%, 10%;
  background-position: top right, bottom left;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ started }) =>
    !started &&
    css`
      @media (max-width: ${({ theme }) => theme.mobile}px) {
        height: 100vh;
      }
    `}
`;
