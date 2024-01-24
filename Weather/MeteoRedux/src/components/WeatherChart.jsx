//this is needed to import the chart that will show forecast data

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

//I personalised the chart and it's container
const WeatherChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '400px', overflow: 'hidden', padding: '10px' }}>
      <div style={{ width: '100%', height: '300px', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius:'15%', padding: '2px', marginTop:'20px'}}>
        <ResponsiveContainer style={{ marginTop:'15px' }}>
          <LineChart data={data}>
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
