import React from 'react'

const CardTitleWithContent = (props) => {
  return (
    <div className='card shadow mb-4'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
        </div>
        <div className='card-body'>
            <props.contentData />
        </div>
    </div>
  )
}

export default CardTitleWithContent