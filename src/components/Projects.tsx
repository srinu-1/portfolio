import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dockerized FastAPI Application',
    description: 'Built and dockerized a FastAPI application with Docker Compose. The application includes user data management and persistent storage using Docker volumes.',
    image: 'https://raw.githubusercontent.com/srinu-1/docker-fastapi-test/main/app/static/fastapi.png',
    technologies: ['FastAPI', 'Docker', 'Docker Compose', 'Python'],
    github: 'https://github.com/srinu-1/docker-fastapi-test.git',
    demo: 'http://localhost:8000'
  },
  {
    title: 'Automated AWS Resources Monitoring',
    description: 'Developed a shell script to monitor AWS resources, providing automated alerts and resource utilization reports.',
    image: 'https://raw.githubusercontent.com/srinu-1/aws-resources-monitoring/main/static/aws.png',
    technologies: ['AWS', 'Shell Scripting', 'Linux'],
    github: 'https://github.com/srinu-1/aws-resources-monitoring',
    demo: null
  },
  {
    title: 'Automated Deployment Using Jenkins and Docker',
    description: 'Implemented a CI/CD pipeline using Jenkins and Docker for automated testing and deployment.',
    image: 'https://raw.githubusercontent.com/srinu-1/jenkins-docker-pipeline/main/static/jenkins.png',
    technologies: ['Jenkins', 'Docker', 'CI/CD'],
    github: 'https://github.com/srinu-1/jenkins-docker-pipeline',
    demo: null
  },
  {
    title: 'Weather Application',
    description: 'Created a React application that allows users to search for weather conditions in different locations.',
    image: 'https://raw.githubusercontent.com/srinu-1/weather-app/main/static/weather.png',
    technologies: ['React', 'JavaScript', 'API Integration'],
    github: 'https://github.com/srinu-1/weather-app',
    demo: 'https://srinu-1.github.io/weather-app'
  },
  {
    title: 'Passwordless SSH Access Between AWS EC2 Instances',
    description: 'Configured and implemented passwordless SSH access between AWS EC2 instances for secure and efficient server management.',
    image: 'https://raw.githubusercontent.com/srinu-1/aws-ssh-config/main/static/ssh.png',
    technologies: ['AWS', 'SSH', 'Linux'],
    github: 'https://github.com/srinu-1/aws-ssh-config',
    demo: null
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          variant="caption"
                          sx={{
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        size="small"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 