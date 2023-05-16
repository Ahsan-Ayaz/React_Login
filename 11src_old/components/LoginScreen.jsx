import React from 'react'
import Logo from '../images/logo.png'
import AuthLogo from '../images/auth.png'
import LoginForm from './LoginForm'

const LoginScreen = () => {
  return (
    <div className='container-fluid con-login p-5'>
        <div className='row'>
            <div className='col-sm-5'>
                <div className='pt-5'>
                <img src={Logo} alt="Logo" />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='col-5' src={AuthLogo} alt="Authentication" />
                </div>
            </div>
            <div className='col-sm-7'>
                <LoginForm />
            </div>
        </div>
    </div>
  )
}

export default LoginScreen