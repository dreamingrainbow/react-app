import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionContainer = styled(Container)(
  ({ theme }) => {
    const backgroundImage = '/assets/intro/background.png';
    return {
      height: '100vh',
      background: `url(${backgroundImage}) no-repeat center center / cover`,
    };
  },
  { maxWidth: 'lg' }
);

export default SectionContainer;