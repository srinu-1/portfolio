import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Dockerized FastAPI Application',
    description: 'Built and dockerized a FastAPI application with endpoints to manage user data stored in a JSON file. Configured Docker Compose for deployment and ensured data persistence using Docker volumes.',
    technologies: ['Docker', 'Docker Compose', 'FastAPI', 'JSON', 'Postman'],
    link: 'https://github.com/yourusername/dockerized-fastapi',
  },
  {
    title: 'Automated AWS Resources Monitoring',
    description: 'Created a shell script to automate the monitoring of AWS resources, including EC2 instances, S3 buckets. Implemented commands to list and count running EC2 instances, active S3 buckets and IAM roles and policies.',
    technologies: ['Bash', 'Shell Scripting', 'AWS'],
    link: 'https://github.com/yourusername/aws-monitoring',
  },
  {
    title: 'Automated Deployment Using Jenkins and Docker',
    description: 'Built a CI/CD pipeline using Jenkins for automated deployment. Implemented Jenkins Master-Agent on EC2 with SSH authentication. Integrated Docker for containerized deployment and consistency.',
    technologies: ['Jenkins', 'Docker', 'AWS', 'EC2', 'SSH'],
    link: 'https://github.com/yourusername/jenkins-docker',
  },
  {
    title: 'Weather Application',
    description: 'A React application that helps users search for weather conditions in specific locations. Displays current weather conditions, temperature, and humidity.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Passwordless SSH Access Between AWS EC2 Instances',
    description: 'Configured secure communication between EC2 instances using SSH key pairs. Implemented security groups and automated the setup process.',
    technologies: ['AWS', 'Linux', 'Security Groups', 'SSH'],
    link: 'https://github.com/yourusername/aws-ssh',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.title}
                sx={{
                  width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' },
                }}
              >
                <motion.div
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
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(33, 150, 243, 0.1)',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 