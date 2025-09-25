import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageRightSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
  width: '25%',
}));

export default PageRightSide;