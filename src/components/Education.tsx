import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const education = [
  {
    institution: 'MLR Institute of Technology',
    degree: 'Bachelor of Technology in Mechanical Engineering',
    year: 'Jun 2019 — May 2023',
    description: 'Graduated with a degree in Mechanical Engineering',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'PCM (Physics, Chemistry, Mathematics)',
    year: 'Jun 2017 — May 2019',
    description: 'Completed intermediate education with focus on science subjects',
  },
  {
    institution: 'Matrusri High School',
    degree: 'SSC (Secondary School Certificate)',
    year: 'Jun 2016 — Apr 2017',
    description: 'Completed high school education',
  },
];

const certifications = [
  {
    name: 'AWS Course Completion Certificate',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'SQL Course Completion Certificate',
    issuer: 'Online Learning Platform',
  },
  {
    name: 'Docker Course Completion Certificate',
    issuer: 'Online Learning Platform',
  },
];

const interests = [
  {
    name: 'Music & Reading',
    description: 'In my free time, I enjoy listening to music and reading novels. Check out my Spotify playlist!',
    link: 'https://open.spotify.com/user/31rjacphspbixrmd2r5qu5yq6hqe',
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
            Education & Certifications
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
                variant="h4"
                component="h3"
                sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <SchoolIcon color="primary" />
                Education
              </Typography>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {edu.year}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {edu.description}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <WorkspacePremiumIcon color="primary" />
                Certifications
              </Typography>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      {cert.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      {cert.issuer}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <WorkspacePremiumIcon color="primary" />
                Interests
              </Typography>
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      {interest.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                      {interest.description}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      component="a"
                      href={interest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        }
                      }}
                    >
                      Visit Spotify Profile
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 