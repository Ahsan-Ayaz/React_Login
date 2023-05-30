import React from 'react'
import SideBar from '../SideBar'
import NavBarTop from '../NavBarTop'
import CardTitleWithContent from '../dashboard/CardTitleWithContent'
import TableContent from './TableContent'
import Footer from '../Footer'

const TablePage = () => {
  return (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
            <NavBarTop />
            <div className='container-fluid'>
                <div className="">
                    <h1 className="h3 mb-0 text-gray-800">Tables</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
                </div>
                <CardTitleWithContent title="DataTables Example" contentData={TableContent} />
            </div>
        </div>
        <Footer />
        </div>
        
    </div>
  )
}

export default TablePage