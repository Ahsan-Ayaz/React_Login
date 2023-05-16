import React from 'react'
import { useState } from 'react'
import { EyeFill, Eye } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Field } from 'formik';


const PassField = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
  return (
    <>
      

      <Field>
        {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
        }) => (
          <InputGroup className="mb-4">
            <Form.Label htmlFor="basic-url">Password</Form.Label>
            <Form.Control label="Password" name="password" placeholder="8+ characters" type={passwordType} value={passwordInput} />
            <Button className="btn" onClick={togglePassword}>{ passwordType==="password"? <EyeFill /> : <Eye /> }</Button>
            {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
            )}
          </InputGroup>
        )}
      </Field>
      
    </>
  )
}

export default PassField