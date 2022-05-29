import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#373e3d',
      light: '#39FF14',
      dark: '#404040',
    },
    formColor: {
      main: '#ffffff47',
    },

    green: createColor('#39FF14'),

    warm: createColor('#FE2712'),

    cold: createColor('#0246FF'),
    pastel: {
      main: '#F5D2D3',
      light: '#BDD0C4',
      dark: '#9AB7D3',
    },
    background: {
      default: '#FDFDFD',
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
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      backgroundColor: 'common.white',
    },
  },
  typography: {
    fontFamily: ['Mulish ,sans-serif'].join(','),
  },
});

export default lightTheme;
