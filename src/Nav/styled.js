import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-family: "Karla", sans-serif;
    font-size: 51px;
    color: ${({theme}) => theme.colors.rhino}
  }

  button {
    font-size: 26px;
    padding: 26.5px 46px;
    width: 315px;
    border: none;
    border-radius: 24px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.kashmirBlue};
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.9;
    }
  }
`