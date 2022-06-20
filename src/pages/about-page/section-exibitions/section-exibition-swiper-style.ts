import { makeStyles } from '@mui/styles';
import lightTheme from '../../../styles/theme';

const useStyles: any = makeStyles({
  swiperContainer: {
    paddingBottom: '4rem',
    '& .swiper-wrapper': {
      alignItems: 'center',
    },
    '& .swiper-pagination-bullet': {
      background: `${lightTheme.palette.neon.main}`,
    },
    '& .swiper-button-next': {
      color: `${lightTheme.palette.neon.main}`,
      ':hover': {
        background: 'red',
        margginButtom: '3rem',
      },
    },

    '& .swiper-button-prev': {
      color: `${lightTheme.palette.neon.main}`,
      margginButtom: '3rem',
    },
  },
});

export default useStyles;
