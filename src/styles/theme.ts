import { createTheme, PaletteColor } from '@mui/material';

const theme = createTheme();

const createColor = (color: string): PaletteColor => theme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#373e3d',
      light: '#39FF14',
      dark: '#404040',
      // main: '#015B8A',
      // light: '#EBEDF3',
      // dark: '#404040',
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
      // default: '##92ff00',
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
      height: 60,
      backgroundColor: 'common.white',
      // backgroundColor: 'linear-gradient(0deg, rgba(255,255,255,0.9110994739692753) 0%, rgba(255,255,255,1) 100%)',
    },
  },
  typography: {
    fontFamily: ['Mulish ,sans-serif'].join(','),
  },
});

export default lightTheme;
