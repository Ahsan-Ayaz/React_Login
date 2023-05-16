import React from 'react'
import Form from 'react-bootstrap/Form';
import BtnWhite from './ButtonWhite'
import InputField from './InputField'
import BtnPrimary from './BtnPrimary'
import ThirdPartySignup from './ThirdPartySignup'
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

const initialValues = {
    fullName: '',
    email: '',
    password: '',
  };

  let loginSchema = object({
    fullName: string().required(),
    email: string().email().required(),
    password: string().required().min(8),
  });
  /*const validate = (values) => {
    const errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Required';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      } 

      if (!values.password) {
        errors.password = 'Required';
      } else if(values.password.length < 8) {
        errors.password = 'Password Must be at least 8 characters long.'
      }
  
    return errors;
  };*/

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <>
    <div className='d-flex align-items-center justify-content-end pe-4 pt-5'>
        <p className='m-0 pe-3'>Already have an account?</p> <BtnWhite name="Sign In" />
    </div>
    <div className='ps-5 pe-5'>
        <h1>Welcome to Treva</h1>
        <p>Register your account</p>
        <Formik
            initialValues={initialValues}
            //validate={validate}
            validationSchema={loginSchema}
            onSubmit={(values) => {
                console.log(values);
                //event.preventDefault();
                dispatch(login(values));
            }}
            >
        {({
        errors,
        touched,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
        <InputField type="text" label="Name" name="fullName" placeholder="Full Name" />
        <InputField type="email" label="Email" name="email" placeholder="test@gmail.com" />
        <InputField type="password" label="Password" name="password" placeholder="8+ characters" />
        <BtnPrimary name="Login" />
        <ThirdPartySignup />
        </Form>
      )}
        </Formik>
    </div>
    </>
  )
}

export default LoginForm