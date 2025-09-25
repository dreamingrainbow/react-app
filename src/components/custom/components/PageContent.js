import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  height: 'calc(100% - 175px)',
}));

export default PageContent;