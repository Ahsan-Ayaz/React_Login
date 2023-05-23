import React from 'react';
import {ThreeDotsVertical} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import AreaLineChart from './AreaLineChart';
import RevenuePieChart from './RevenuePieChart';

const ChartsCard = (props) => {
  return (
    <div className='card shadow mb-4'>
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
        <div className="dropdown no-arrow">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <ThreeDotsVertical />
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" x-placement="bottom-end">
            <div className="dropdown-header">Dropdown Menu:</div>
            {(props.chartName === 'earning') ? (
                <>
                {props.menu.map((item, index) => (
                    <Link className='dropdown-item' key={index} to={item.mAction} >{item.mName}</Link>
                ))}
                </>
            ) : (
                <>
                {props.menu.map((item, index) => (
                    <Link className='dropdown-item' key={index} to={item.mAction} >{item.mName}</Link>
                ))}
                </>
            )}
            </div>
        </div>
        </div>
        <div className='card-body'>
            {(props.chartName === 'earning') ? (
                <AreaLineChart />
            ) : (
                <RevenuePieChart />
            )}
        </div>
    </div>
  )
}

export default ChartsCard