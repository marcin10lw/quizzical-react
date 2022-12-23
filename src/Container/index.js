import { StyledContainer, Image } from "./styled";

const Container = () => (
  <StyledContainer>
    <Image top src={`${process.env.PUBLIC_URL}/images/blob-top.png`} alt="" />
    <Image bottom src={`${process.env.PUBLIC_URL}/images/blob-bottom.png`} alt="" />
  </StyledContainer>
);

export default Container;
