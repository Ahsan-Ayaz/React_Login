import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import SearchForm from './nav/SearchForm';

const NavBarTop = () => {
    
  return (
    <>
    <Nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow dashboard-nav-top'>
        <SearchForm />
    </Nav>
    </>
  )
}

export default NavBarTop