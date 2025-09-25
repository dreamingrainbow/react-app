import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '80%',
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default PageMenu;