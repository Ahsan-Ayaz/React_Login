import React from 'react'

const BtnPrimary = (props) => {
  return (
    <button className='btn btn-cus-primary w-25'>{props.name ? props.name : 'Button'}</button>
  )
}

export default BtnPrimary