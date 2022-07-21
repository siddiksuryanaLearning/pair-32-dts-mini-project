import { Box } from '@mui/system';
import React from 'react';
import Footer from './Footer';
import Header from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        {children}
        <Box
          sx={{
            flex: '1',
          }}
        ></Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
