import React from 'react'
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AreaLineChart = () => {
    const data = [
        {
          name: 'Jan',
          Earnings: 0,
          amt: 0,
        },
        {
          name: 'Feb',
          Earnings: 10000,
          amt: 10000,
        },
        {
          name: 'Mar',
          Earnings: 5000,
          amt: 5000,
        },
        {
          name: 'April',
          Earnings: 15000,
          amt: 15000,
        },
        {
          name: 'May',
          Earnings: 10000,
          amt: 10000,
        },
        {
          name: 'June',
          Earnings: 20000,
          amt: 20000,
        },
        {
          name: 'July',
          Earnings: 15000,
          amt: 15000,
        },
        {
          name: 'Aug',
          Earnings: 25000,
          amt: 25000,
        },
        {
        name: 'Sep',
        Earnings: 20000,
        amt: 20000,
        },
        {
        name: 'Oct',
        Earnings: 30000,
        amt: 30000,
        },
        {
        name: 'Nov',
        Earnings: 25000,
        amt: 25000,
        },
        {
        name: 'Dec',
        Earnings: 40000,
        amt: 40000,
        },
      ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Earnings" stroke="#4e73df" fill="#f6f8fd" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaLineChart