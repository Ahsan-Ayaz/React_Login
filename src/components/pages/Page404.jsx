import React from 'react'
import SideBar from '../SideBar'
import NavBarTop from '../NavBarTop'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
            <NavBarTop />
            <div className="container-fluid">
                <div className="text-center">
                    <div className="error mx-auto" data-text="404">404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                    <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                    <Link to={"/dashboard"}>← Back to Dashboard</Link>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        
    </div>
  )
}

export default Page404