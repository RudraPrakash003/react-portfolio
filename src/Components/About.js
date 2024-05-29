import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
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
      <Typography variant="h2" gutterBottom sx={{ color: '#64ffda' }}> About Me</Typography>
      <Typography variant="body1" color="textSecondary">

        <p>Throughout my education and personal projects, I have cultivated a deep passion for creating engaging and user-friendly web experiences. My journey in web development has been driven by a relentless curiosity and a desire to overcome new challenges, pushing me to continuously expand my knowledge of the latest trends and best practices in the industry.</p>

        <p>I am particularly enthusiastic about contributing to open-source projects, as they provide a valuable opportunity to collaborate with a diverse community of developers and to give back to the tech ecosystem. This involvement has not only enhanced my technical skills but also fostered a spirit of collaboration and innovation.</p>

        <p>Exploring new tools and frameworks is a significant aspect of my professional growth. By staying updated with emerging technologies, I ensure that my work remains at the cutting edge of web development. I enjoy experimenting with different approaches to find the most effective solutions for complex problems, always aiming to improve both the functionality and aesthetics of the web applications I build.</p>

        <p>My goal is to seamlessly blend creativity with technical expertise to create exceptional web experiences that delight users. Whether it's through intuitive user interfaces, responsive design, or optimized performance, I strive to make every project a testament to my dedication to quality and user satisfaction.</p>

        <p>In summary, my dedication to web development is fueled by a commitment to continuous learning, innovation, and a passion for crafting web experiences that not only meet but exceed user expectations.</p>
      </Typography>
    </div>
    </Box>
  );
};

export default About;
