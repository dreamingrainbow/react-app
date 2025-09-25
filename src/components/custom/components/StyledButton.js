import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Irish Grover',
  textTransform: 'none',
  color: '#E7AA6A',
  background: 'linear-gradient(to right, #72100B, #72100B)',
  '&:hover': {
    boxShadow: '0px 4px 16px 0px rgba(231, 171, 106, 0.6)',
    textShadow: '0px 4px 16px 0px rgba(231, 171, 106, 0.6)',
  },
  '&:focus': {
    boxShadow: '0px 9px 16px 0px rgba(231, 171, 106, 0.6)',
    textShadow: '0px 9px 16px 0px rgba(231, 171, 106, 0.6)',
    fontWeight: 'bold',
  },
}));

export default StyledButton;
