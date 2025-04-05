import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: 'Bachelor Of Technology in Mechanical Engineering',
    institution: 'MLR Institute Of Technology',
    duration: 'Jun 2019 — May 2023',
    grade: 'GPA: 7.16',
  },
  {
    degree: 'Narayana Junior College (PCM)',
    institution: 'Narayana Junior College',
    duration: 'Jun 2017 — May 2019',
    grade: 'GPA: 93.5',
  },
  {
    degree: 'Matrusri High School (SSC)',
    institution: 'Matrusri High School',
    duration: 'Jun 2016 — Apr 2017',
    grade: 'GPA: 8.5',
  },
];

const Education = () => {
  return (
    <Box
      id="education"
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
            Education
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {education.map((edu, index) => (
              <Box key={edu.degree}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SchoolIcon sx={{ mr: 2, color: 'primary.main' }} />
                      <Box>
                        <Typography variant="h6" component="h3">
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {edu.institution}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        {edu.duration}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {edu.grade}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 