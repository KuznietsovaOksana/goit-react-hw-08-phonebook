import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          label="Email"
          type="email"
          name="email"
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <TextField
          required
          label="Password"
          type="password"
          name="password"
          margin="normal"
          fullWidth
        />
      </div>
      <Button
        variant="contained"
        size="large"
        type="submit"
        fullWidth
        sx={{
          mt: '24px',
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
