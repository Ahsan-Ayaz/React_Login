import React from 'react'
import SideBar from './SideBar'
import NavBarTop from './NavBarTop';
import MainContent from './MainContent'
import Footer from './Footer';

const Dashboard = () => {
  return (
    <>
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
            <NavBarTop />
            <MainContent />
        </div>
        <Footer />
        </div>
        
    </div>
    </>
  )
}

export default Dashboard