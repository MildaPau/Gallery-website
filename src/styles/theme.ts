import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#19263B',
      light: '#B6BFD1',
    },
    formColor: {
      main: '#ffffff47',
    },
    neon: {
      main: '#02F702',
    },
    background: {
      default: '#fefefe',
    },
    green: createColor('#ffffff47'),
  },
  mixins: {

    navbar: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      height: 50,
      backgroundColor: 'transparent',
      m: 2,
    },
    footer: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      height: 45,
      backgroundColor: 'transparent',
      m: 2,
    },
  },
  typography: {
    fontFamily: ['Poppins, sans-serif'].join(','),
  },
});

export default lightTheme;
