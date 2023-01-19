import { MainTitle } from 'components/MainTitle/MainTitle';

import { Container } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <MainTitle title="Your personal phonebook" />
      </Container>
    </main>
  );
}
