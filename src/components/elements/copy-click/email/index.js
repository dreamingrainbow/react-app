import React from 'react';
import { Link } from '@mui/material';
import CopyClick from '../index';

const CopyClickEmail = ({ email }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          const mailtoLink = `mailto:${email}`;
          const userConfirmed = window.confirm(
            `Do you want to send an email to ${email}?`
          );
          if (userConfirmed) {
            window.location.href = mailtoLink;
          }
        }}
        color="textSecondary"
        underline="hover"
        sx={{ cursor: 'pointer' }}
      >
        {email}
      </Link>
      <CopyClick>{email}</CopyClick>
    </div>
  );
};

export default CopyClickEmail;
