import React from 'react';
import { Form as FormikForm, Formik } from 'formik';
// import * as Yup from 'yup';

/*
const FORM_VALIDATION = Yup.object().shape({
  thumbnail: Yup.string().required('Please select thumbnail'),
  title: Yup.string().required('Course title is required'),
  description: Yup.string().required('Description is required'),
  skills: Yup.array().min(0),
  tags: Yup.array().min(0),
  price: Yup.number().required('Please enter price'),
  summary: Yup.string().required('description is required'),
  discountPrice: Yup.number(),
});
*/

function Form({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <Formik
      initialValues={{
        ...initialValues,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

export { Form };
export default Form;
