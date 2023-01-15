import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 30px;
  font-weight: 600;
  font-family: "Karla", sans-serif;
  color: ${({ theme }) => theme.colors.rhino};
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid ${({ theme }) => theme.colors.rhino};
  border-top: 10px solid transparent;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
