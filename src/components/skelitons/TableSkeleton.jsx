import React from 'react'
import Skeleton from 'react-loading-skeleton';

const TableSkeleton = () => {
  return (
    <table>
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
        <tr>
          <td>
            <Skeleton width={50} />
          </td>
          <td>
            <Skeleton width={100} />
          </td>
          <td>
            <Skeleton width={100} />
          </td>
          <td>
            <Skeleton width={50} />
          </td>
          <td>
            <Skeleton width={100} />
          </td>
          <td>
            <Skeleton width={200} />
          </td>
          {/* Add more table cells as needed */}
        </tr>
        {/* Repeat the skeleton row for the desired number of rows */}
      </tbody>
    </table>
  )
}

export default TableSkeleton