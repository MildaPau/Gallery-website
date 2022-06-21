import { Button, styled } from '@mui/material';

const ButtonScale = styled(Button)(({ theme }) => ({
  mt: 4,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 0,
  fontSize: 12,
  px: 3,
  opacity: 0.9,
  transition: theme.transitions.create(['transform', 'background'], {
    duration: '0.8s',
  }),
  ':hover': {
    opacity: 1,
    transform: 'scale(1.1)',
  },
}));

export default ButtonScale;
