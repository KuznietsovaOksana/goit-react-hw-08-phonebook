import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Typography component="p" sx={{ textTransform: 'none' }}>
        Welcome, {user.name}!
      </Typography>
      <Button
        size="large"
        variant="text"
        sx={{ color: 'white' }}
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
