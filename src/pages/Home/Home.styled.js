import styled from 'styled-components';

export const Box = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 32px);
  max-width: ${({ theme }) => theme.spacing(310)};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;
