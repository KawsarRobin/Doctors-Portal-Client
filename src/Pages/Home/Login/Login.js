import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, logInWithEmail, logInWithGoogle } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const Field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[Field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogleSingIn = () => {
    logInWithGoogle(location, navigate);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    logInWithEmail(loginData.email, loginData.password, location, navigate);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={6}>
          <Typography sx={{ mb: 3 }} variant="subtitle1">
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleOnSubmit}>
              <TextField
                sx={{ width: '75%' }}
                onChange={handleOnChange}
                label="Email"
                type="Email"
                name="email"
                variant="standard"
              />
              <TextField
                sx={{ width: '75%' }}
                label="Password"
                onChange={handleOnChange}
                name="password"
                type="password"
                variant="standard"
              />
              <Button
                style={{
                  backgroundColor: '#28e0e0',
                  width: '75%',
                }}
                type="submit"
                sx={{ mt: 8, mb: 2 }}
                variant="contained"
              >
                Sign in
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button variant="text">New here? Please Register!</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">
              Congrats! You have logged in successfully
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          <p>---------------------------</p>
          <Button onClick={handleGoogleSingIn} variant="contained">
            Sign in with Google
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
