import React from 'react';
import './Skillcont.css'

const CustomLinearProgress = ({ value, color }) => {
  return (
    <div className="custom-linear-progress">
      <div
        className="custom-linear-progress-bar"
        style={{ width: `${value}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default CustomLinearProgress;
