import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container, Toolbar } from '@mui/material';
import Bar from '@mui/material/AppBar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Bar position="static">
        <Container
          maxWidth="lg"
          sx={{
            textTransform: 'uppercase',
            mt: '16px',
            mb: '16px',
          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </Bar>
    </>
  );
};
