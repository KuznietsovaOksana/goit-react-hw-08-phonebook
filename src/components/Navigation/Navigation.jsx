import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
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
        to="/"
      >
        Home
      </ListItem>
      {isLoggedIn && (
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
          to="/contacts"
        >
          Contacts
        </ListItem>
      )}
    </Box>
  );
};
