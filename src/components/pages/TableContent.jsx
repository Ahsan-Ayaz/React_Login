import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { FiletypeCsv } from 'react-bootstrap-icons';
import { CSVLink } from 'react-csv';
import PaginationTable from '../sections/PaginationTable';
import TableSkeleton from '../skelitons/TableSkeleton';

const ApiUrl = "https://dummyjson.com/users";

const TableContent = () => {
    const [limit, setlimit] = useState(10);
    const [skipEntries, setskipEntries] = useState(0);
    const handleLimitChange = (event) => {
        setlimit(event.target.value);
        setskipEntries(0);
      };
    const [users, setUsers] = useState([]);
    
    const updateLimit = (data) => {
        setskipEntries(data);
    }

    var apiUrlLimit = `${ApiUrl}?limit=${limit}&skip=${skipEntries}`;
    //console.log(apiUrl);
    useEffect(() => {
        fetch(apiUrlLimit) // Replace with your API endpoint
          .then(response => response.json())
          .then(data => {console.log(data);
            setUsers(data.users);
        })
          .catch(error => console.log(error));
      }, [limit, skipEntries]);

  return (
    <div className='table-responsive'>
        <div id='dataTable_wrapper' className='dataTables_wrapper dt-bootstrap4'>
            <div className='row m-0'>
            <div className="col-sm-12 col-md-6">
                <div className="dataTables_length" id="dataTable_length">
                <label className='d-inline-flex align-items-center'>Show 
                <Form.Select className='ms-2 me-2' value={limit} onChange={handleLimitChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Select>
                entries</label>
                </div>
            </div>
            <div className='col-sm-12 col-md-6'>
                <div id="dataTable_filter" className="dataTables_filter">
                    <div className='float-right'>
                        {/*<Button variant="primary me-3"><FiletypeCsv /> Download CSV</Button>*/}
                        <CSVLink data={users} className='me-2 btn btn-primary' filename="table.csv">
                            <FiletypeCsv /> Export CSV
                        </CSVLink>
                        <label className='d-inline-flex'>Search:
                            <Form.Control type="search" className="form-control form-control-sm ms-2" placeholder="" aria-controls="dataTable" />
                        </label>
                    </div>
                </div>
            </div>
            </div>
            <div className='row m-0'>
            {users ? (
            <Table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {/*console.log(users.users)*/}
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName +' '+ user.lastName }</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            ) : (
                <TableSkeleton />
              )}
            </div>
            <PaginationTable api={ApiUrl} pageLimit={limit} updateLimit={updateLimit} />
        </div>
    </div>
  )
}

export default TableContent