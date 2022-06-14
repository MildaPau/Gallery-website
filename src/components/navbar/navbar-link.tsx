import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import lightTheme from '../../styles/theme';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  width: '100%',
  border: `1px solid ${lightTheme.palette.primary.main}`,
  transition: theme.transitions.create(['background'], {
    duration: '0.8s',
  }),
  position: 'relative',

  '&.active': {
    background: theme.palette.neon.main,

  },
  ':hover': {
    background: theme.palette.neon.main,

  },
}));

export default NavbarLink;
