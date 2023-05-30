import React from 'react'
import Form from 'react-bootstrap/Form';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { Google, Facebook } from 'react-bootstrap-icons'

const initialValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    repeatPass: '',
  };

  if(!initialValues.remember){

  }
  let signupSchema = object({
    fname: string().required("First name is required."),
    lname: string().required("Last name is required."),
    email: string().email().required("Email is Required"),
    password: string().required("Password is Required").min(7),
    repeatPass: string().required("Required"),
  });

const CreateAccount = () => {
    document.body.classList.add('bg-gradient-primary');
  return (
    <div className='container'>
        <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
                <div className='row'>
                    <div className='col-lg-5 d-none d-lg-block bg-register-image'></div>
                    <div className='col-lg-7'>
                        <div className='p-5'>
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                //validate={validate}
                                validationSchema={signupSchema}
                                onSubmit={(values) => {
                                    console.log(values);
                                    try {
                                    //dispatch(loginUser(values));
                                    } catch (error) {
                                    debugger
                                    console.log(error);
                                    }
                                }}
                                >
                            {({
                            handleSubmit,
                        }) => (
                            <Form className="user" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                <Field name="fname">
                                    {({
                                    field, // { name, value, onChange, onBlur }
                                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                    meta,
                                    }) => (
                                        <>
                                    <input type="text" name='fname' className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" {...field} />
                                    {meta.touched && meta.error && (
                                        <div className="error">{meta.error}</div>
                                        )}
                                        </>
                                    )}
                                    </Field>
                                    </div>
                                <div className="col-sm-6">
                                    <input type="text" name='lname' className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                </div>
                                </div>
                                <div className="form-group">
                                <input type="email" name='email' className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                </div>
                                <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" name='password' className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="password" name='repeatPass' className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                </div>
                                </div>
                                <button type='submit' href="login.html" className="btn btn-primary btn-user btn-block">
                                Register Account
                                </button>
                            </Form>
                            )}
                            </Formik>
                            <hr/>
                            <div className='third-party-signup'>
                                <a href="#" className="btn btn-google btn-user btn-block">
                                <Google /> Register with Google
                                </a>
                                <a href="#" className="btn btn-facebook btn-user btn-block">
                                <Facebook /> Register with Facebook
                                </a>
                            </div>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="login.html">Already have an account? Login! 😃</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount