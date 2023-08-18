import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 800px;

  table {
    margin-top: 32px;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 32px;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.main}
  }
`;

