
import React from 'react';

const ProgressCircle = ({
  percentage,
  size = 100,
  strokeWidth = 8,
  color = '#006400',
  label,
  animated = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const animation = animated 
    ? 'transition-all duration-1000 ease-out' 
    : '';

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="fill-none stroke-gray-200"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={`fill-none ${animation}`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
        
        {/* Percentage text */}
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="fill-current font-bold text-xl"
          style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
        >
          {percentage}%
        </text>
      </svg>
      
      {label && (
        <span className="mt-2 text-center text-sm font-medium">{label}</span>
      )}
    </div>
  );
};

export default ProgressCircle;
