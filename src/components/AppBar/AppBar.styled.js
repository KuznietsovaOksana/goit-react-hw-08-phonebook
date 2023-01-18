import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
`;
