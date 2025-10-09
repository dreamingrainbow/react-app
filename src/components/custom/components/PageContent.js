import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  marginTop: '8px',
  height: 'calc(100% - 75px)',
  // border: `1px solid orange`,
}));

export default PageContent;