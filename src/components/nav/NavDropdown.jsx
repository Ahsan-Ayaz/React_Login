import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';

const NavDropdown = (props) => {
  return (
    <div className={props.navClass} aria-labelledby={props.areaLabel}>
        <h6 className="dropdown-header">
            {props.title} Center
        </h6>
        {props.areaLabel === 'alertsDropdown' ? (
        props.data.map((item, index) => (
            <Link className='dropdown-item d-flex align-items-center' key={index} to="/">
            <div className='mr-3'>
                <div className={'icon-circle bg-' + item.iconClass}>
                <item.icon fill="white" />
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{item.date}</div>
                <span>{item.title}</span>
            </div>
            </Link>
        ))
        ) : (
        props.data.map((item, index) => (
            <Link className='dropdown-item d-flex align-items-center' key={index} to={'/'}>
                <div className="dropdown-list-image mr-3">
                    <Image className="rounded-circle" src={item.icon} alt="" />
                    <div className={"status-indicator bg-"+item.iconClass}></div>
                  </div>
                  <div>
                    <div className="text-truncate">{item.title}</div>
                    <div className="small text-gray-500">{item.senderName + " . " + item.timeAgo}</div>
                  </div>
            </Link>
        ))
        )}
            <Link className='dropdown-item text-center small text-gray-500' to="/">Show All {props.title}</Link>
    </div>
  )
}

export default NavDropdown