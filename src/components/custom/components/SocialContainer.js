import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'end',
  alignSelf: 'end',
  marginLeft: 'auto',
  gap: '10px',
}));

export default SocialContainer;