import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'utils/PrivateRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} closeButton={false} />
      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
