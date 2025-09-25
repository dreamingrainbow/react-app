import React from 'react';
import { Link } from '@mui/material';
import CopyClick from '../index';

const CopyClickPhone = ({ phone }) => {
  return <div style={{ display: 'flex', alignItems: 'center' }}>
  <Link
    to="#"
    onClick={(e) => {
      e.preventDefault();
      const mailtoLink = `tel:${phone}`;
      const userConfirmed = window.confirm(
        `Do you want to call ${phone}?`
      );
      if (userConfirmed) {
        window.location.href = mailtoLink;
      }
    }}
    sx={{ cursor: 'pointer' }}
    color="textSecondary"
    underline="hover"
  >
    {phone}
  </Link>
  <CopyClick>{phone}</CopyClick>
</div>;
};

export default CopyClickPhone;
