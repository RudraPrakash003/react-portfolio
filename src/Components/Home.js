import React from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import developerImage from '../Data/Images/HomeImage.png';

const Home = () => {
  const navigate = useNavigate();
  
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: { xs: '4rem', md: '6rem' },
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        padding: '2rem',
      }}
    >
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: { xs: '2rem', md: '5rem' },
              color: '#ccd6f6',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#64ffda' }}>
              Hi, my name is
            </Typography>
            <Typography variant="h1" gutterBottom>
              Rudra Prakash.
            </Typography>
            <Typography variant="h2" gutterBottom sx={{ color: '#8892b0' }}>
              I am a Web Developer.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#8892b0', maxWidth: '540px' }}>
              I'm an enthusiastic web developer eager to launch my career in creating innovative and user-friendly websites and applications. As a recent graduate with a degree in Computer Science, I've gained a solid foundation in web development principles and technologies.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate('/contact')}
              sx={{ color: '#64ffda', borderColor: '#64ffda' }}
            >
              Contact Me
            </Button>
            <Box sx={{ display: 'flex', marginTop: '1rem' }}>
              <IconButton
                sx={{ color: '#64ffda' }}
                onClick={() => openLink('https://github.com/RudraPrakash003/')}
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{ color: '#64ffda' }}
                onClick={() => openLink('https://www.linkedin.com/in/yarrojurudraprakash/')}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{ color: '#64ffda' }}
                onClick={() => openLink('https://www.instagram.com/_rudra_prakash/')}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <img
            src={developerImage}
            alt="Developer at work"
            style={{ width: '100%', maxWidth: '1200px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
