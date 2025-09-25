import React from 'react';
import { Box } from '@mui/material';
import TitleTextField from '../elements/text-field/TitleTextField';
import FirstNameTextField from '../elements/text-field/FirstNameTextField';
import MiddleNameTextField from '../elements/text-field/MiddleNameTextField';
import LastNameTextField from '../elements/text-field/LastNameTextField';

export default function NameSection(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
      }}
    >
      <TitleTextField {...props} />
      <FirstNameTextField {...props} />
      <MiddleNameTextField {...props} />
      <LastNameTextField {...props} />
    </Box>
  );
}
