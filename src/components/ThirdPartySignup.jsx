import React from 'react'
import FaceboocIcon from '../images/facebook.png'
import LinkedinIcon from '../images/linkedin.png'
import GoogleIcon from '../images/google.png'

const ThirdPartySignup = () => {
  return (
    <div className='d-flex align-items-center mt-5 mb-5 third-party-log'>
        <p className='m-0 pe-3'>Create account with</p>
        <div className="d-flex">
        <a href="/" className='social-login-btns'><img src={FaceboocIcon} alt="Facebook Signup" /></a>
        <a href="/" className='social-login-btns'><img src={LinkedinIcon} alt="Linkedin Signup" /></a>
        <a href="/" className='social-login-btns'><img src={GoogleIcon} alt="Google Signup" /></a>
        </div>
    </div>
  )
}

export default ThirdPartySignup