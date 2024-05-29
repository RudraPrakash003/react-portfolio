import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#0a192f',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
  },
});

export default theme;
