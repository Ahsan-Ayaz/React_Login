import React, { useEffect, useState } from 'react'

const PaginationTable = (props) => {
    const ApiUrl = props.api;

    const [totalEntries, settotalEntries] = useState([]);
    const [pageCount, setpageCount] = useState([]);
    const [startEntry, setstartEntry] = useState(1);
    const [lastEntry, setlastEntry] = useState();
    const [previous, setprevious] = useState();
    const [next, setnext] = useState();

    const handlePagination = (event) => {
        var pageNo = event.target.getAttribute('value');
        var skipEntries = pageNo * props.pageLimit;
        setlastEntry(skipEntries);
        setstartEntry(skipEntries - props.pageLimit + 1);
        //setskipEntries(skipEntries);
        props.updateLimit(skipEntries - props.pageLimit);
        setprevious(pageNo - 1);
        setnext(pageNo + 1);
        console.log(pageNo);
    };

    useEffect(() => {
        fetch(ApiUrl) // Replace with your API endpoint
          .then(response => response.json())
          .then(data => {//console.log(data.total / props.pageLimit);
            //setUsers(data.users);
            settotalEntries(data.total);
            setlastEntry(props.pageLimit);
            
            var limit = data.total / props.pageLimit;
            const pageLoop = Array.from({ length: limit }, (_, index) => index + 1);
            setpageCount(pageLoop);
        })
          .catch(error => console.log(error));
      }, [props.pageLimit]);
  return (
    <div className="row m-0">
        <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing {startEntry} to {lastEntry} of {totalEntries} entries</div>
        </div>
        <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                <ul className="pagination">
                    <li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" value={previous} className="page-link" onClick={handlePagination}>Previous</a></li>
                    {pageCount.map((pageCount) => (
                        <li className="paginate_button page-item" key={pageCount}><a href="#" value={pageCount} className="page-link" onClick={handlePagination}>{pageCount}</a></li>
                    ))}
                    <li className="paginate_button page-item next" id="dataTable_next"><a href="#" value={next} className="page-link" onClick={handlePagination}>Next</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PaginationTable