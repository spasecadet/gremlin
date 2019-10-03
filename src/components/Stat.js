import React from 'react';

// Styles
import './Stat.scss';

/**
 * Component to display statistic of a title and visualization of a percentage.
 * 
 * @param {Object} props 
 */
function Stat(props) {
  const { title, value, color } = props;

  return (
    <div className='statContainer'>
      <div className='statTitle'>{title}</div>
      <div className='visualizationContainer'>
        <div className='visualizeStat' style={{backgroundColor: color, width: ((value * 100) + '%')}}></div>
      </div>
    </div>
  );
}

export default Stat;
