import React from 'react'

const PaginationTable = () => {
  return (
    <div className="row m-0">
        <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
        </div>
        <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                <ul className="pagination">
                    <li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li>
                    <li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" className="page-link">2</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" className="page-link">3</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" className="page-link">4</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" className="page-link">5</a></li>
                    <li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" className="page-link">6</a></li>
                    <li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PaginationTable