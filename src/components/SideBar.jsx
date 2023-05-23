import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { EmojiLaughing, Speedometer, GearFill, WrenchAdjustable, Folder, BarChart, Table } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import SingleLI from './SingleLI';
import SingleLISubMenu from './SingleLISubMenu';

const SideBar = () => {
    const subItems1 = [
        {url: '/', title: 'Buttons' },
        {url: '/', title: 'Cards' },
    ];
    const subItems2 = [
        {url: '/', title: 'Colors'},
        {url: '/', title: 'Borders'},
        {url: '/', title: 'Animations'},
        {url: '/', title: 'Other'},
    ];
    const subItems3 = [
        {url: '/', title: 'Login'},
        {url: '/', title: 'Register'},
        {url: '/', title: 'Forgot Password'},
        {url: '/page-not-found', title: '404 Page'},
        {url: '/', title: 'Blank Page'},
    ];
  return (
    <>
    <ListGroup as="ul" className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
      <Link to='/dashboard' className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
            <EmojiLaughing />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <SingleLI name="Dashboard" link="/dashboard" icon={Speedometer} />
      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">
        Interface
      </div>
      <SingleLISubMenu name="Components" link="/" icon={GearFill} data_tar="collapseTwo" sub_title="Custom Components" sub_menu={subItems1}  />
      <SingleLISubMenu name="Utilities" link="/" icon={WrenchAdjustable} data_tar="collapseUtilities" sub_title="Custom Utilities" sub_menu={subItems2} />
      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">
        Addons
      </div>
      <SingleLISubMenu name="Pages" link="/" icon={Folder} data_tar="collapsePages" sub_title="All Pages" sub_menu={subItems3} />
      <SingleLI name="Charts" link="/" icon={BarChart} />
      <SingleLI name="Tables" link="/" icon={Table} />
      <hr className="sidebar-divider my-0" />
    </ListGroup>
    </>
  )
}

export default SideBar