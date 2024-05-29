import React from 'react';
import { Typography, Box } from '@mui/material';


import PythonImage from '../Data/Images/SkillImages/python.png';
import JavaImage from '../Data/Images/SkillImages/java.png';
import HTMLImage from '../Data/Images/SkillImages/html.png';
import CSSImage from '../Data/Images/SkillImages/css.png';
import JavaScriptImage from '../Data/Images/SkillImages/javascript.png';
import ReactImage from '../Data/Images/SkillImages/react.png';
import NodejsImage from '../Data/Images/SkillImages/node.png';
import DjangoImage from '../Data/Images/SkillImages/django.png';
import SQLImage from '../Data/Images/SkillImages/sql.png';
import MySQLImage from '../Data/Images/SkillImages/mysql.png';
import MongoImage from '../Data/Images/SkillImages/mongo.png';
import GitImage from '../Data/Images/SkillImages/git.png';

const Skills = () => {
  const skills = [
    { name: 'Python', image: PythonImage },
    { name: 'Java', image: JavaImage },
    { name: 'HTML', image: HTMLImage },
    { name: 'CSS', image: CSSImage },
    { name: 'JavaScript', image: JavaScriptImage },
    { name: 'ReactJS', image: ReactImage },
    { name: 'Node.js', image: NodejsImage },
    { name: 'Django', image: DjangoImage },
    { name: 'SQL', image: SQLImage },
    { name: 'MySQL', image: MySQLImage },
    { name: 'MongoDB', image: MongoImage },
    { name: 'Git', image: GitImage },
  ];

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
      <Typography variant="h2" gutterBottom sx={{ color: '#64ffda' }}>Skills</Typography>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', width: '100%', maxWidth: '800px' }}>
        {skills.map(skill => (
          <Box key={skill.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #64ffda', borderRadius: '8px', padding: '1rem' }}>
            <img src={skill.image} alt={skill.name} style={{ width: '48px', height: '48px', marginBottom: '0.5rem' }} />
            <Typography variant="subtitle1" style={{ color: 'white' }}>{skill.name}</Typography>
          </Box>
        ))}
      </div>
    </div>
    </Box>
  );
};

export default Skills;
