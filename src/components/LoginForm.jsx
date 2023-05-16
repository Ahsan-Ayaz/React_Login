import React from 'react'
import Form from 'react-bootstrap/Form';
import BtnWhite from './ButtonWhite'
import InputField from './InputField'
import BtnPrimary from './BtnPrimary'
import ThirdPartySignup from './ThirdPartySignup'
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

const initialValues = {
    email: '',
    password: '',
    remember: false
  };

  if(!initialValues.remember){

  }
  let loginSchema = object({
    email: string().email().required("Email is Required"),
    password: string().required("Password is Required").min(7),
  });
  

const LoginForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  //console.log(state);
  const chLog = JSON.parse(localStorage.getItem('authorized'));
  console.log(chLog);
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
                //console.log(values);
                //event.preventDefault();
                //dispatch(login(values));
                try {
                  //await dispatch(loginUser({ username, password }));
                  //await dispatch(login(values));
                  dispatch(loginUser(values));
                  //alert('Login Successful');
                  //history.push('/main'); // redirect to the main page after successful login
                } catch (error) {
                  debugger
                  console.log(error);
                }
            }}
            >
        {({
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
        {/*<InputField type="text" label="Name" name="fullName" placeholder="Full Name" />*/}
        <InputField type="email" label="Email" name="email" placeholder="test@gmail.com" />
        <InputField type="password" label="Password" name="password" placeholder="Min 5 characters" />
        <Form.Check 
            type='checkbox'
            id={`checkbox-remember`}
            label={`Remenber`}
            name="remember"
            className='mb-4'
          />
        <BtnPrimary name="Login" type="submit" />
        <ThirdPartySignup />
        </Form>
      )}
        </Formik>
    </div>
    </>
  )
}

export default LoginForm