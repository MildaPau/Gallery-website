import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  opacity: 0.6,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  marginRight: 20,
  transition: theme.transitions.create(['opacity', 'boxShadow'], {
    duration: '0.6s',
  }),
  position: 'relative',

  '&.active': {
    opacity: 1,
  },

  '&.active::after': {
    content: '""',
    position: 'absolute',
    height: 7,
    width: 7,
    bottom: -9,
    right: '45%',
    // borderRadius: '50%',
    background: theme.palette.primary.main,
  },

  ':hover': {
    opacity: 1,
  },
}));

export default NavbarLink;
