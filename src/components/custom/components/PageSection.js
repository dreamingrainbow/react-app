import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  height: 'calc(100% - 169px)',
}));

export default PageSection;