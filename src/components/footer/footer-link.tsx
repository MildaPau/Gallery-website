import { styled, Link } from '@mui/material';
import lightTheme from '../../styles/theme';

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  width: 45,
  border: `1px solid ${lightTheme.palette.primary.main}`,
  transition: theme.transitions.create(['background'], {
    duration: '0.8s',
  }),

  ':hover': {
    background: theme.palette.neon.main,
  },
}));

export default FooterLink;
