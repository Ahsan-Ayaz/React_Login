import { Field } from 'formik';
import React from 'react'
import Form from 'react-bootstrap/Form';

const InputField = (props) => {
  return (
    <Field name={props.name}>
    {({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    meta,
    }) => (
      <Form.Group className="mb-3">
        <Form.Label>{props.label ? props.label : null}</Form.Label>
        <Form.Control type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : null} {...field} />
        {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
        )}
      </Form.Group>
    )}
    </Field>
  )
}

export default InputField