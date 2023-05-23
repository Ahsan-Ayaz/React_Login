import React from 'react';
import NavBarTop from './NavBarTop';
import {Download, Calendar2Fill, CurrencyDollar, ClipboardFill, ChatFill} from 'react-bootstrap-icons';
import DashboardCountCard from './dashboard/DashboardCountCard';
import ChartsCard from './dashboard/ChartsCard';
import CardTitleWithContent from './dashboard/CardTitleWithContent';
import ContentProjects from './dashboard/ContentProjects';
import ContentIllustrations from './dashboard/ContentIllustrations';
import ContentDevelopment from './dashboard/ContentDevelopment';

const MainContent = () => {
    const earningChartMenu = [
        {mName: 'Monthly Earnings', mAction: '/'},
        {mName: 'Annual Earnings', mAction: '/'},
    ];
    const revenuChartMenu = [
        {mName: 'Monthly', mAction: '/'},
        {mName: 'Annual', mAction: '/'},
    ];
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
            <NavBarTop />
            <div className='container-fluid'>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><Download /> Generate Report</a>
                </div>
                <div className='row'>
                    <DashboardCountCard cardClass="primary" cardTitle="Earnings (Monthly)" Count="$40,000" icon={Calendar2Fill} />
                    <DashboardCountCard cardClass="success" cardTitle="Earnings (Annual)" Count="$215,000" icon={CurrencyDollar} />
                    <DashboardCountCard cardClass="info" cardTitle="Tasks" Count="50" type="tasks" icon={ClipboardFill} />
                    <DashboardCountCard cardClass="warning" cardTitle="Pending Requests" Count="18" icon={ChatFill} />
                </div>
                <div className='row'>
                    <div className='col-xl-8 col-lg-7'>
                        <ChartsCard title="Earnings Overview" chartName="earning" menu={earningChartMenu} />
                    </div>
                    <div className='col-xl-4 col-lg-5'>
                        <ChartsCard title="Revenue Sources" chartName="revenue" menu={revenuChartMenu} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <CardTitleWithContent title="Projects" contentData={ContentProjects} />
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <CardTitleWithContent title="Illustrations" contentData={ContentIllustrations} />
                        <CardTitleWithContent title="Development Approach" contentData={ContentDevelopment} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContent