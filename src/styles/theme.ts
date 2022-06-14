import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#19263B',
      light: '#B6BFD1',
      // dark: '#404040',
    },
    formColor: {
      main: '#ffffff47',
    },

    green: createColor('#39FF14'),
    warm: createColor('#FE2712'),
    cold: createColor('#0246FF'),

    neon: {
      main: '#02F702',
    },
    background: {
      default: '#fefefe',
    },
  },
  mixins: {
    box: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      m: 2,
      p: 1,
      width: 300,
      height: 100,
      boxShadow: '3',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      height: 50,
      backgroundColor: 'transparent',
    },
    footer: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      height: 45,
      backgroundColor: 'transparent',
    },
  },
  typography: {
    fontFamily: ['Poppins, sans-serif'].join(','),
  },
});

export default lightTheme;
