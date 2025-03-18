
import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { gradeData } from '../utils/mockData';

const GradesChart = () => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    // Simple animation effect when component mounts
    if (chartRef.current) {
      chartRef.current.style.opacity = '0';
      chartRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (chartRef.current) {
          chartRef.current.style.opacity = '1';
          chartRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    }
  }, []);

  const renderTooltip = (props) => {
    const { active, payload } = props;
    
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
          <p className="font-medium">{`${payload[0].payload.month}`}</p>
          <p className="text-sm text-green">{`Passing: ${payload[0].value}`}</p>
          <p className={`text-sm ${payload[1].value >= payload[0].value ? 'text-green' : 'text-red-500'}`}>
            {`Actual: ${payload[1].value}`}
          </p>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div 
      ref={chartRef} 
      className="w-full h-full transition-all duration-700 ease-out"
    >
      <h3 className="text-white font-bold text-lg p-4 bg-green rounded-t-lg">GRADES</h3>
      <div className="bg-white p-4 rounded-b-lg" style={{ height: 'calc(100% - 60px)' }}>
        <div className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Passing: <span className="text-green">•••</span></span> 
          <span className="ml-4 font-medium">Actual: <span className="text-light-pink">•••</span></span>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={gradeData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip content={renderTooltip} />
            <Bar dataKey="passing" fill="#90EE90" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="actual" fill="#FFB6C1" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GradesChart;
