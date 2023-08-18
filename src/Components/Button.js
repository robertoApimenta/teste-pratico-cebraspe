import styled from 'styled-components';

export default styled.button`
  border: none;
  color: #fff;
  width: 124px;
  padding: 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};;
  }

  &[disabled] {
    background: gray;
  }
`;