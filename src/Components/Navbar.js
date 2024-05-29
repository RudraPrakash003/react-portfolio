import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0a192f' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: '#64ffda', textDecoration: 'none' }}>
          RP
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/home" sx={{ color: '#ccd6f6' }}>
            <Typography component="span" sx={{ color: '#64ffda', marginRight: '0.3rem' }}>01.</Typography>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: '#ccd6f6' }}>
            <Typography component="span" sx={{ color: '#64ffda', marginRight: '0.3rem' }}>02.</Typography>
            About
          </Button>
          <Button component={Link} to="/projects" sx={{ color: '#ccd6f6' }}>
            <Typography component="span" sx={{ color: '#64ffda', marginRight: '0.3rem' }}>03.</Typography>
            Projects
          </Button>
          <Button component={Link} to="/skills" sx={{ color: '#ccd6f6' }}>
            <Typography component="span" sx={{ color: '#64ffda', marginRight: '0.3rem' }}>04.</Typography>
            Skills
          </Button>
          <Button component={Link} to="/contact" sx={{ color: '#ccd6f6' }}>
            <Typography component="span" sx={{ color: '#64ffda', marginRight: '0.3rem' }}>05.</Typography>
            Contact
          </Button>
          <Button component={Link} to="/resume" variant="outlined" sx={{ color: '#64ffda', borderColor: '#64ffda' }}>
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
