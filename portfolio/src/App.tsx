import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: 'background.default',
      color: 'text.primary',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 8, sm: 10 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Box>
    </Box>
  );
};

export default App; 