import styled from "styled-components";

export const StyledSection = styled.section`
  border-bottom: 1.3px solid ${({theme}) => theme.colors.grey};
  margin-bottom: 20px;

  h2 {
    margin: 0;
    color: ${({theme}) => theme.colors.rhino};
    font-size: 26px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 21px 0 23px;
`;

export const Button = styled.button`
  border: 1.9px solid ${({theme}) => theme.colors.kashmirBlue};
  border-radius: 13px;
  padding: 6px 10px;
  color: ${({theme}) => theme.colors.rhino};
  font-weight: 500;
  font-size: 16.8px;
  cursor: pointer;
  background-color: transparent;
  transition: all 120ms ease-out;

  &:hover {
    background-color: ${({theme}) => theme.colors.linkWater};
    border-color: ${({theme}) => theme.colors.linkWater};
  }
`;