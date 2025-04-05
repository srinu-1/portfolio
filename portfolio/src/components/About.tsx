import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I am a passionate engineer with a strong foundation in Mechanical Engineering and a growing expertise in technology. My journey in the tech world has been driven by curiosity and a desire to solve complex problems.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I have hands-on experience with various technologies including AWS, Docker, Jenkins, and web development. My background in Mechanical Engineering has given me a unique perspective on problem-solving and system design.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                I am constantly learning and adapting to new technologies and methodologies. My goal is to contribute to innovative solutions that make a meaningful impact in the tech industry.
              </Typography>
              <Typography variant="body1">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in software development.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 