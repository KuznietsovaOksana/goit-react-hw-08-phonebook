import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, Typography } from '@mui/material';

export default function Login() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        textAlign: 'center',
        mt: '64px',
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        color="secondary"
        sx={{
          textTransform: 'uppercase',
          mb: '24px',
        }}
      >
        Login
      </Typography>
      <LoginForm />
    </Container>
  );
}
