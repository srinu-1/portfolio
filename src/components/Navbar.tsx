import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Srinivas Reddy
        </Typography>
        <Box>
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <Button
              key={item}
              color="inherit"
              href={`#${item.toLowerCase()}`}
              sx={{
                mx: 1,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 