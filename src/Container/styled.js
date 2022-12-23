import styled from "styled-components";

export const Container = styled.div`
  min-height: 900px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 1px 1px 10px 1px #afafaf;
  background-image:
  url(${`${process.env.PUBLIC_URL}/images/blob-top.png`}),
  url(${`${process.env.PUBLIC_URL}/images/blob-bottom.png`});
  background-repeat: no-repeat, no-repeat;
  background-size: 35%, 25%;
  background-position: top right, bottom left;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
