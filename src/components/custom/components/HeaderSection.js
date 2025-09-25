import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  minHeight: '194px',
}));

export default HeaderSection;