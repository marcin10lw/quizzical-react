import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-family: "Karla", sans-serif;
    font-size: 45px;
    color: ${({theme}) => theme.colors.rhino}
  }

  button {
    font-size: 23px;
    padding: 23px 40.6px;
    width: 280px;
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