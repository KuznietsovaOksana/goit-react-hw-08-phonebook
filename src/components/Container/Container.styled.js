import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.spacing(310)};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
