import { Container, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
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
        Registration
      </Typography>
      <RegisterForm />
    </Container>
  );
}
