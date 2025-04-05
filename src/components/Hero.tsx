import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hi 👋, I'm Srinivas Reddy
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Web Developer & DevOps Engineer
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                mr: 2,
                background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2 30%, #1E88E5 90%)',
                },
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#projects"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.light',
                  color: 'primary.light',
                },
              }}
            >
              View My Work
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 