import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                I am Srinivas Reddy Yeruva, a passionate Web Developer with a Bachelor's degree in Mechanical Engineering from MLR Institute of Technology. Despite my mechanical background, I've developed a strong interest in software development and DevOps practices.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                My goal is to build a long-term career in an industry where I can best utilize my skills, learn new technologies, and build solutions for existing problems. I am particularly interested in DevOps practices, cloud computing, and web development.
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'background.default',
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Key Skills
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  • Web Development (HTML, CSS, React)
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  • Database Management (SQL)
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  • Programming Languages (Python, JavaScript)
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  • DevOps Tools (Git, AWS, Jenkins, Docker, Kubernetes, Terraform)
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Scripting (Linux, Bash Scripting)
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 