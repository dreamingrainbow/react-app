import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageToolBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  justifyContent: 'center',
  marginTop: '4px',
}));

export default PageToolBar;