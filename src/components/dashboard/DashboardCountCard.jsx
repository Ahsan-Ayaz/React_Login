import React from 'react'

const DashboardCountCard = (props) => {
    const TheIcon = props.icon;
  return (
    <div className="col-xl-3 col-md-6 mb-4">
        <div className={"card border-left-"+props.cardClass+" shadow h-100 py-2"}>
        <div className="card-body">
            <div className="row no-gutters align-items-center m-0">
            <div className="col mr-2">
                <div className={"text-xs font-weight-bold text-"+props.cardClass+" text-uppercase mb-1"}>{props.cardTitle}</div>
                {(props.type === 'tasks') ? (
                <div className="row no-gutters align-items-center m-0">
                    <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.Count}%</div>
                    </div>
                    <div className="col">
                        <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: props.Count +"%"}} aria-valuenow={props.Count} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                ) : (
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.Count}</div>
                )}
            </div>
            <div className="col-auto">
                <TheIcon />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardCountCard