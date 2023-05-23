import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Direct', value: 65 },
  { name: 'Social', value: 30 },
  { name: 'Referral', value: 15 },
];
const COLORS = ['#4e73df', '#1cc88a', '#36b9cc'];

const RevenuePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={280} height={280}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RevenuePieChart;