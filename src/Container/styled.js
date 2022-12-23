import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  min-height: 900px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 1px #afafaf;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;

  ${({ top }) =>
    top &&
    css`
      width: 38%;
      top: 0;
      right: 0;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      width: 28%;
      bottom: 0;
      left: 0;
    `}
`;
