import React from 'react'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import MockupImg from '../../images/undraw_posting_photo.svg'

const ContentIllustrations = () => {
  return (
    <>
    <div className="text-center">
    <Image className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={MockupImg} alt="Mockup" />
    </div>
    <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
    </>
  )
}

export default ContentIllustrations