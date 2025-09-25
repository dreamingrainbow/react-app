import React from 'react';

import { TextField as MuiTextField } from '@mui/material';
import { useField } from 'formik';
import { PropTypes } from 'prop-types';

const TextField = ({ name, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <MuiTextField
      name={name}
      fullWidth
      variant={'outlined'}
      autoComplete="off"
      
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      
      {...rest}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export { TextField };
export default TextField;
