import React from 'react';
import copyToClipboard from '../../../utils/copyToClipboard';

import { Button } from '@mui/material';
import { Check } from '@mui/icons-material';
import { CopyAll } from '@mui/icons-material';

import useSnackbar from '../../../hooks/useSnackbar';

const CopyClick = ({ children }) => {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef(null);
  const { handleClickVariant } = useSnackbar();
  const handleCopy = () => {
    copyToClipboard(children);
    setCopied(true);
    handleClickVariant('Copied to clipboard', 'success');
    timer.current = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Button
      onClick={handleCopy}
      variant="text"
      color="textSecondary"
      size="small"
      sx={{ padding: 0 }}
    >
      {copied ? <Check /> : <CopyAll />}
    </Button>
  );
};

export default CopyClick;
