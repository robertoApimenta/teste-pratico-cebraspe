import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const Form = styled.form`
  margin-top: 32px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  img {
    width: 16px;
  }

  h1 {
    margin-left: 24px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.main}
  }

  a {
    text-decoration: none;
    
  }
`;