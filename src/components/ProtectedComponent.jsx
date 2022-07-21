import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

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

  if (user) {
    return children;
  }

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
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Kamu Telah Logout</Typography>
        <Typography variant="body">Tolong Login Kembali</Typography>

        <Button
          size="large"
          onClick={() => {
            navigate('/login');
          }}
          color="secondary"
          variant="contained"
        >
          OK
        </Button>
      </Stack>
    </Box>
  );
};

export default ProtectedComponent;
