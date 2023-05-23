import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import SearchForm from './nav/SearchForm';
import TopNavMenu from './nav/TopNavMenu';

const NavBarTop = () => {
    
  return (
    <>
    <Nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow dashboard-nav-top'>
        <SearchForm />
        <TopNavMenu />
    </Nav>
    </>
  )
}

export default NavBarTop