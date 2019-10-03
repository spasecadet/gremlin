import React from 'react';

// Custom components
import PackageListElement from './PackageListElement';

// Styles
import './PackageList.scss';


/**
 * Creates a list of <PackageListElement> to display npm packages
 * 
 * @param {Object} props 
 */
function PackageList(props) {

  // Array of match/package list items
  const matchesList = props.matches.map((match) => (
    <li className='packageListItem' key={match.package.name}>
      <PackageListElement match={match}></PackageListElement>
    </li>
  ));

  return (
    <div>
      <ul className='packageList'>
        {matchesList}
      </ul>
    </div>
  );
}

export default PackageList;