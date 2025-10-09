import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  textAlign: 'start',
  marginTop: '-20px',
  paddingY: '2px',
  gap: '1px',
  borderTop: `1px solid orange`,
}));

export default FooterSection;