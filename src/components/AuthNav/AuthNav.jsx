import { Box, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box component="nav" sx={{ display: 'flex', gap: '16px' }}>
      <ListItem
        component={NavLink}
        sx={{
          borderRadius: '4px',
          '&.active': {
            color: 'black',
            backgroundColor: 'white',
          },
          '&.active:hover:not(.active)': {
            color: 'white',
          },
          '&.active:focus-visible:not(.active)': {
            color: 'white',
          },
        }}
        to="/register"
      >
        Register
      </ListItem>
      <ListItem
        component={NavLink}
        sx={{
          borderRadius: '4px',
          '&.active': {
            color: 'black',
            backgroundColor: 'white',
          },
          '&.active:hover:not(.active)': {
            color: 'white',
          },
          '&.active:focus-visible:not(.active)': {
            color: 'white',
          },
        }}
        to="/login"
      >
        Log In
      </ListItem>
    </Box>
  );
};
