import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Message = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
`;

export const Info = styled.p`
  font-size: 20px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.red};

  &:last-child {
    font-weight: 600;
    font-size: 22px;
    margin-top: 20px;
  }
`;
