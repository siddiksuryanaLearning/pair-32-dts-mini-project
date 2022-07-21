import { Button, CircularProgress, Grid, Stack, TextField, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { auth, registerReq } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    registerReq(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (isLoading) {
    return (
      <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{
          background: `url(/images/ProfilePicture.png)`,
          minHeight: '100vh',
          bgcolor: 'black',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vh',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '85%',
            height: '100%',
            top: 0,
            right: 0,
            backgroundImage: `linear-gradient(270.09deg, #000000 59.87%, rgba(217, 217, 217, 0) 99.92%)`,
          },
        }}
      >
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} bgcolor="black">
          <Box
            sx={{
              position: 'relative',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              // gap: 4,
              px: 10,
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              label="EMAIL"
              type="email"
              color="secondary"
              sx={{
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
              }}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="PASSWORD"
              type="password"
              color="secondary"
              sx={{
                mt: 2,
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
              }}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                height: '56px',
              }}
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Stack
              sx={{
                width: '100%',
                marginTop: 2,
              }}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Typography>Sudah punya akun? </Typography>
              <Link
                color="secondary"
                component={Button}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Log In
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPage;
