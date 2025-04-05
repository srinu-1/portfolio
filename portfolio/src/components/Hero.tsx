import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, #0a1929 30%, #1a2027 90%)',
          zIndex: -1
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            Srinivas Reddy Yeruva
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 2, 
              color: 'text.secondary',
              textAlign: 'center'
            }}
          >
            Aspiring Engineer
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              maxWidth: '600px',
              mx: 'auto',
              textAlign: 'center'
            }}
          >
            I am passionate about technology and problem-solving. With expertise in various technologies including AWS, Docker, Jenkins, and web development, I aim to contribute to innovative solutions and make a meaningful impact in the tech industry.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            justifyContent: 'center'
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="projects"
                smooth={true}
                duration={500}
              >
                View Projects
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 