import React from 'react'
import Logo from '../images/logo.png'
import AuthLogo from '../images/auth.png'
import LoginForm from './LoginForm'

const LoginScreen = () => {
  return (
    <div className='h-100 container con-login p-5'>
        <div className='row'>
            <div className='col-sm-5 con-logo-img'>
                <div className='pt-5 logo'>
                <img className='ms-5' src={Logo} alt="Logo" />
                </div>
                <div className='h-75 d-flex align-items-center justify-content-center'>
                    <img className='col-5 img-auth' src={AuthLogo} alt="Authentication" />
                </div>
            </div>
            <div className='col-sm-7 con-form'>
                <LoginForm />
            </div>
        </div>
    </div>
  )
}

export default LoginScreen