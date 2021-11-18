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
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import login from '../../../../images/login.png';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const Field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[Field] = value;
    setLoginData(newLoginData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert('password did not matched');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={6}>
          <Typography sx={{ mb: 3 }} variant="subtitle1">
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleOnSubmit}>
              <TextField
                sx={{ width: '75%' }}
                onBlur={handleOnBlur}
                label="Your Name"
                name="name"
                variant="standard"
              />
              <TextField
                sx={{ width: '75%' }}
                onBlur={handleOnBlur}
                label="Your Email"
                type="Email"
                name="email"
                variant="standard"
              />
              <TextField
                sx={{ width: '75%' }}
                label="Your Password"
                onBlur={handleOnBlur}
                name="password"
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: '75%' }}
                label="Re-Type your password"
                onBlur={handleOnBlur}
                name="password2"
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
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button variant="text">
                  Already Registered? Please Sign in!
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">
              Congrats! You have created your account successfully
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
