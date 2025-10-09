import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  height: 'calc(100% - 245px)',
}));

export default PageSection;