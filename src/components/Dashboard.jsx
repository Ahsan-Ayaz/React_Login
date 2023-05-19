import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'

const Dashboard = () => {
  return (
    <>
    <div id="wrapper">
        <SideBar />
        <MainContent />
    </div>
    </>
  )
}

export default Dashboard