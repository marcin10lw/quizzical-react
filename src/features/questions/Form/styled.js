import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 280px;
`;

export const Header = styled.h1`
  font-family: "Karla", sans-serif;
  text-align: center;
  font-size: 45px;
  color: ${({ theme }) => theme.colors.rhino};
`;

export const StartButton = styled.button`
  font-size: 23px;
  margin-top: 20px;
  padding: 23px 40.6px;
  width: 280px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: opacity 200ms;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.kashmirBlue};

  &:hover {
    opacity: 0.9;
  }
`;

export const InputGroup = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  label {
    display: inline-block;
    margin-bottom: 6px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.kashmirBlue};
`;
