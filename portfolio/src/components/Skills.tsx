import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'AWS', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'Jenkins', level: 70 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Git', level: 85 },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {skill.name}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: 8,
                        bgcolor: 'background.paper',
                        borderRadius: 4,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {skill.level}%
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 