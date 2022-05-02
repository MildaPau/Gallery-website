import { SxProps, Theme } from '@mui/material';

const hoverCardMixin: SxProps<Theme> = (theme) => ({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  // height: 400,
  maxWidth: 350,
  p: 2,
  '&>.image': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: 1,
    transition: theme.transitions.create('opacity', { duration: 1000 }),
  },
  '&>.overlay': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    p: 2,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: '#80808069',
    zIndex: 5,
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: 1000,
    }),
  },
  // Changes on mouse hover
  ':hover': {
    '&>.image': {
      opacity: 1,
    },
    '&>.overlay': {
      opacity: 1,
    },
  },
});

export default hoverCardMixin;
