import React from 'react'
import SideBar from './SideBar'
import NavBarTop from './NavBarTop';
import MainContent from './MainContent'

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
        </div>
        
    </div>
    </>
  )
}

export default Dashboard