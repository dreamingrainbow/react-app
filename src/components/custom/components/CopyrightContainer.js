import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CopyrightContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'start',
  alignSelf: 'start',
  alignContent: 'start',
}));

export default CopyrightContainer;