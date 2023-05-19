import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { Search } from 'react-bootstrap-icons';

const initialValues = {
    searchf: ''
  };

  if(!initialValues.remember){

  }
  let searchSchema = object({
    searchf: string().required("Type some thing for search"),
  });

const SearchForm = () => {
  return (
    <Formik
            initialValues={initialValues}
            //validate={validate}
            validationSchema={searchSchema}
            onSubmit={(values) => {
                console.log(values);
                //event.preventDefault();
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
        <Form onSubmit={handleSubmit}>
        <InputGroup className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">


    <Field name='searchf'>
    {({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    meta,
    }) => (
        <>
        <Form.Control className='bg-light border-0 small' type='text' aria-label="search" placeholder='Search for...' {...field} />
        <Button type='submit' variant="btn btn-primary">
          <Search />
        </Button>
        {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
        )}
        </>
    )}
    </Field>


        
        </InputGroup>
        </Form>
      )}
        </Formik>
  )
}

export default SearchForm