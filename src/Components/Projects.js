import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography, Button, Modal } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ToDo from '../Data/Images/ProjectImages/ToDo.jpg';
import ToDo1 from '../Data/Images/ProjectImages/ToDo1.jpg';
import ToDo2 from '../Data/Images/ProjectImages/ToDo2.jpg';
import et from '../Data/Images/ProjectImages/expensetracker.jpg';
import et1 from '../Data/Images/ProjectImages/expensetracker1.jpg';
import et2 from '../Data/Images/ProjectImages/expensetracker2.jpg';
import et3 from '../Data/Images/ProjectImages/expensetracker3.jpg';
import sc from '../Data/Images/ProjectImages/shoppingcart.jpg';
import sc1 from '../Data/Images/ProjectImages/shoppingcart1.jpg';
import sc2 from '../Data/Images/ProjectImages/shoppingcart2.jpg';
import sc3 from '../Data/Images/ProjectImages/shoppingcart3.jpg';

const ProjectCard = ({ title, description, link, images }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Card sx={{ maxWidth: 400, height: 430, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} style={{ backgroundColor: '#333', color: 'white' }}>
        <Box sx={{ height: 300 }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={image} alt={`${title} - slide ${index + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', margin: '0 auto' }} />
              </div>
            ))}
          </Slider>
        </Box>
        <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ color: 'rgba(255, 255, 255, 0.7)', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {description}
          </Typography>
          <Button onClick={handleOpen} sx={{ color: '#64ffda', padding: 0, textTransform: 'none', marginTop: '0.5rem' }}>
            Read More
          </Button>
        </CardContent>
        <Box sx={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          <Button href={link} target="_blank" rel="noopener noreferrer" variant="contained" sx={{ backgroundColor: '#64ffda', color: '#0a192f' }}>
            View Project
          </Button>
        </Box>
      </Card>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ 
          position: 'relative', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', md: '80%' }, 
          height: { xs: '70%', md: '90%' }, 
          bgcolor: 'background.paper', 
          border: '2px solid #000', 
          boxShadow: 24, 
          p: 4,
          overflowY: 'auto' 
        }}>
          <Typography id="modal-title" variant="h4" component="h2" gutterBottom sx={{ paddingLeft:'40rem' }}>
            {title}
          </Typography>
          <Box sx={{ height: 300 }}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={image} alt={`${title} - slide ${index + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', margin: '0 auto' }} />
                </div>
              ))}
            </Slider>
          </Box>
          <Typography id="modal-description"  sx={{ mt: 4, marginTop: '25rem', paddingLeft:'10rem' }}>
            {description}
          </Typography>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button href={link} target="_blank" rel="noopener noreferrer" variant="contained" sx={{ backgroundColor: '#64ffda', color: '#0a192f' }}>
              View Project
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', right: '10px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: { xs: '4rem', md: '6rem' },
        paddingLeft: { xs: '2rem', md: '5rem' },
        paddingRight: { xs: '2rem', md: '5rem' },
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ color: '#64ffda' }}>Projects</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: '2rem',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <ProjectCard
          title="ToDo App"
          description="This is a simple and efficient To-Do application built with React. It allows users to manage their daily tasks by adding, completing, updating and deleting tasks."
          link="https://rudraprakash003.github.io/React-ToDo-App/"
          images={[
            ToDo,
            ToDo1,
            ToDo2
          ]}
        />
        <ProjectCard
          title="Expense Tracker"
          description="This is a simple expense tracker application built with React, allowing users to manage their budget, track expenses, and view the remaining balance."
          link="https://rudraprakash003.github.io/React-Expense-Tracker/"
          images={[
            et,
            et1,
            et2,
            et3
          ]}
        />
        <ProjectCard
          title="Shopping Cart"
          description="This is a React-based shopping cart application that allows users to browse products, add them to their cart, and manage their cart items. The application is deployed using GitHub Pages."
          link="https://rudraprakash003.github.io/Shopping-Cart-React/"
          images={[
            sc,
            sc1,
            sc2,
            sc3
          ]}
        />
      </Box>
    </Box>
  );
};

export default Projects;
