import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Web Development', items: ['HTML', 'CSS', 'React'] },
  { name: 'Database Management', items: ['SQL'] },
  { name: 'Programming Languages', items: ['Python', 'JavaScript'] },
  { name: 'DevOps Tools', items: ['Git', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform'] },
  { name: 'Scripting', items: ['Linux', 'Bash Scripting'] },
  { name: 'Operating Systems', items: ['Linux', 'Windows', 'Mac OS'] },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 4,
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    {skill.name}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skill.items.map((item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText',
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 