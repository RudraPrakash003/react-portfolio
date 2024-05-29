import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/sendEmail', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        alert('Message sent successfully!');
      } else {
        const errorMessage = await response.text();
        alert(`Failed to send message. Server responded with: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: { xs: '4rem', md: '6rem' },
        paddingLeft: { xs: '2rem', md: '5rem' },
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
      }}
    >
      <div>
        <Typography variant="h2" gutterBottom sx={{ color: '#64ffda' }}>Contact</Typography>
        <form style={{ width: '100%', maxWidth: '400px', margin: '1rem' }} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: '#64ffda' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#64ffda' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } } }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: '#64ffda' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#64ffda' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } } }}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: '#64ffda' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#64ffda' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } } }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} type="submit">Send</Button>
        </form>
      </div>
    </Box>
  );
};

export default Contact;
