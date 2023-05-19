import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { CaretRightFill, CaretDownFill } from 'react-bootstrap-icons';

const SingleLI = (props) => {
    const IconComponent = props.icon;
    //const SubMenu = props.sub_menu;
  return (
    <ListGroup.Item as="li" className='nav-item'>
        <Link to={props.link} className='nav-link'>
            <IconComponent /> {props.name}
            </Link>
    </ListGroup.Item>
  )
}

export default SingleLI