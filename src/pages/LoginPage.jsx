import { Button, Typography, TextField, Grid, Link, Stack, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate, error]);

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

  const handleSubmit = async (event) => {
    console.log('test');
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

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
            component="form"
            onSubmit={handleSubmit}
            noValidate
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
              required
              variant="filled"
              id="email"
              label="EMAIL"
              name="email"
              autoComplete="email"
              color="secondary"
              sx={{
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              required
              name="password"
              label="PASSWORD"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              sx={{
                mt: 2,
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                height: '56px',
              }}
            >
              Login
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
              <Typography>Belum daftar fakenetflix? </Typography>
              <Link
                color="secondary"
                component={Button}
                onClick={() => {
                  navigate('/register');
                }}
              >
                Daftar sekarang
              </Link>
            </Stack>

            <Typography color="red">
              {errorMessage
                .replace(/-/g, ' ')
                .replace(/Firebase:/g, '')
                .replace('auth/', '')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
