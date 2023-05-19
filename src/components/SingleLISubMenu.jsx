import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { CaretRightFill, CaretDownFill } from 'react-bootstrap-icons';

const SingleLISubMenu = (props) => {
    const IconComponent = props.icon;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
        console.log('Button clicked!');
    };
    const classLink = `nav-link group-nav ${isCollapsed ? 'collapsed' : ''}`;
    const classCollaps = `collapse ${isCollapsed ? 'show' : ''}`;
  return (
    <ListGroup.Item as="li" className='nav-item'>
        <Link to='#' className={classLink} data-target={props.data_tar ? '#'+props.data_tar : 'null'} aria-controls={props.data_tar ? props.data_tar : 'null'} onClick={handleClick} >
            <IconComponent /> {props.name} {props.data_tar ? ( <><CaretRightFill className='c-close' /> <CaretDownFill className='open' /></> ) : (null) }
        </Link> 
        <div id="collapseTwo" className={classCollaps} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">{props.sub_title}</h6>
            {props.sub_menu.map((item, index) => (
                <Link className='collapse-item' key={index} to={item.url} >{item.title}</Link>
            ))}
          </div>
        </div>
        
    </ListGroup.Item>
  )
}

export default SingleLISubMenu