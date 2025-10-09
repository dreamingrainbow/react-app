import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/common/form';
import NameSection from '../../components/forms/NameSection';
import EmailTextField from '../../components/elements/text-field/EmailTextField';
import PasswordTextField from '../../components/elements/text-field/PasswordTextField';
import ConfirmPasswordTextField from '../../components/elements/text-field/ConfirmPasswordTextField';
import AcceptTermsTextField from '../../components/elements/text-field/AcceptTermsTextField';
import * as Yup from 'yup';
const Register = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'start',
          gap: 2,
          justifyContent: 'start',
          alignItems: 'start',
          width: '100%',
          paddingLeft: 6,
        }}
      >
        <Typography variant="h4">Register</Typography>
      </Box>
      {!submitted && (
        <Form
          initialValues={{
            title: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            'new-password': '',
            'confirm-new-password': '',
            acceptTerms: false,
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required('Title is required'),
            firstName: Yup.string().required('First name is required'),
            middleName: Yup.string().required('Middle name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Email is required'),
            'new-password': Yup.string().required('Password is required'),
            'confirm-new-password': Yup.string().required(
              'Confirm password is required'
            ),
            acceptTerms: Yup.boolean().required('Accept terms is required'),
          })}
          onSubmit={() => {
            setSubmitted(true);
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'start',
            alignItems: 'start',
            width: '100%',
          }}
        >
          <NameSection />
          <EmailTextField />
          <PasswordTextField
            name="new-password"
            label="New Password"
            autoComplete="register new-password"
          />
          <ConfirmPasswordTextField
            name="confirm-new-password"
            label="Confirm New Password"
            autoComplete="register new-password"
          />
          <AcceptTermsTextField />
          <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
          <Button type="submit">Register</Button>
        </Form>
      )}
      {submitted && <Typography variant="h4">Submitted</Typography>}
    </Box>
  );
};

export default Register;
