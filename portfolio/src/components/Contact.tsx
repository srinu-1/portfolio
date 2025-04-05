import React from 'react';
import { Box, Container, Typography, Paper, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
      id="contact"
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
            Contact
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                    Get in Touch
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Link
                      href="mailto:srinivas.yeruva01@gmail.com"
                      color="inherit"
                      sx={{ textDecoration: 'none' }}
                    >
                      srinivas.yeruva01@gmail.com
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Link
                      href="tel:+918978383041"
                      color="inherit"
                      sx={{ textDecoration: 'none' }}
                    >
                      +91 8978383041
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>Hyderabad, Telangana, India</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                    <IconButton
                      component={Link}
                      href="https://linkedin.com/in/srinivasreddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'primary.main' }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                    Summary
                  </Typography>
                  <Typography variant="body1" paragraph>
                    An "Aspiring Engineer", To build a long-term career in an industry where I can best utilize my skills, learn new technologies, and build solutions for existing problems.
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      'HTML', 'CSS', 'React', 'SQL', 'Python', 'JavaScript',
                      'Git', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform',
                      'Linux', 'Bash Scripting', 'Windows', 'Mac OS'
                    ].map((skill) => (
                      <Typography
                        key={skill}
                        variant="body2"
                        sx={{
                          background: 'rgba(33, 150, 243, 0.1)',
                          color: 'primary.main',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 