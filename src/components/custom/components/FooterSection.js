import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  textAlign: 'start',
  marginTop: '-50px',
  paddingY: '2px',
  gap: '10px',
}));

export default FooterSection;