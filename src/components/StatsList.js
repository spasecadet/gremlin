import React from 'react';

// Custom components
import Stat from './Stat';

// Styles
import './StatsList.scss';


/**
 * Builds a list of <Stat> components to display a collection of statistics.
 * 
 * @param {Object} props 
 */
function StatsList(props) {
  const { className = '', statistics } = props;

  const statsList = statistics.map((stat) => {
    return (
      <li key={stat.title}>
        <Stat title={stat.title} descriptiveTitle={stat.descriptiveTitle} value={stat.value} color={stat.color}></Stat>
      </li>
    );
  });

  return (
    <div className={' ' + className}>
      <ul className='statisticsList'>
        {statsList}
      </ul>
    </div>
  );
}

export default StatsList;