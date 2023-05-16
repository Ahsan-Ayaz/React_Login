import React from 'react'

const ButtonWhite = (props) => {
  return (
    <button className='btn-cus-white btn'>{props.name ? props.name : 'Button'}</button>
  )
}

export default ButtonWhite