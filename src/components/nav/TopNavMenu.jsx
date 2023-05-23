import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import {BellFill, EnvelopeFill, FileEarmarkTextFill, ExclamationTriangleFill, CurrencyDollar, Person, GearWideConnected, ListCheck, BoxArrowRight} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import NavDropdown from './NavDropdown';
import NoImage from '../../images/source-404.jpg'

const TopNavMenu = () => {
    const SubData1 = [
        {icon: FileEarmarkTextFill, iconClass: 'primary', date: 'December 12, 2019', title: 'A new monthly report is ready to download!'},
        {icon: CurrencyDollar, iconClass: 'success', date: 'December 7, 2019', title: '$290.29 has been deposited into your account!'},
        {icon: ExclamationTriangleFill, iconClass: 'warning', date: 'December 2, 2019', title: 'Spending Alert: We have noticed unusually high spending for your account.'},
    ];
    const SubData2 = [
        {icon: NoImage, iconClass: 'success', title: 'Hi there! I am wondering if you are ne here', senderName: 'Emily Fowler', timeAgo: '58m'},
        {icon: NoImage, iconClass: '', title: 'I have the photos that you orered are', senderName: 'Jae Chun', timeAgo: '1d'},
        {icon: NoImage, iconClass: 'warning', title: 'Last month report looks great, I will contact you', senderName: 'Morgan Alvarez', timeAgo: '2d'},
        {icon: NoImage, iconClass: 'success', title: 'Am I a good boy? The reason I as here', senderName: 'Chicken the Dog', timeAgo: '2w'},
    ];
    const [Notification, setNotification] = useState(false);
    const handleClickNot = () => {
        setNotification(!Notification);
    };
    const [Messages, setMessages] = useState(false);
    const handleClickMes = () => {
        setMessages(!Messages);
    };
    const [UserMenu, setUserMenu] = useState(false);
    const handleClickUser = () => {
        setUserMenu(!UserMenu);
    }
    const classUserMenu = `dropdown-menu dropdown-menu-right shadow animated--grow-in ${UserMenu ? 'show' : ''}`;
    const classOpenNoti = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${Notification ? 'show' : ''}`;
    const classOpenMes = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${Messages ? 'show' : ''}`;
  return (
    <ListGroup as="ul" className="navbar-nav ml-auto">
      <ListGroup.Item as="li" className="nav-item dropdown no-arrow mx-1" onClick={handleClickNot}>
        <Link to="#" id='alertsDropdown' data-toggle="dropdown">
        <BellFill />
        <span className="badge badge-danger badge-counter">3+</span>
        </Link>
        <NavDropdown title="Alerts" navClass={classOpenNoti} areaLabel="alertsDropdown" data={SubData1} />
      </ListGroup.Item>
      <ListGroup.Item as="li" className="nav-item dropdown no-arrow mx-1" onClick={handleClickMes}>
        <Link to="#" id='messagesDropdown' data-toggle="dropdown">
        <EnvelopeFill />
        <span className="badge badge-danger badge-counter">7</span>
        </Link>
        <NavDropdown title="Message" navClass={classOpenMes} areaLabel="messagesDropdown" data={SubData2} />
      </ListGroup.Item>
      <div className="topbar-divider d-none d-sm-block"></div>
      <ListGroup.Item as="li" className="nav-item dropdown no-arrow" onClick={handleClickUser}>
        <Link to="#" className='nav-link dropdown-toggle'>
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
        <Image className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
        </Link>
        <div className={classUserMenu} aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">
                <Person fill="grey" className='me-2' />
                Profile
            </a>
            <a className="dropdown-item" href="#">
                <GearWideConnected fill="grey" className='me-2' />
                Settings
            </a>
            <a className="dropdown-item" href="#">
                <ListCheck fill="grey" className='me-2' />
                Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <BoxArrowRight fill="grey" className='me-2' />
                Logout
            </a>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default TopNavMenu