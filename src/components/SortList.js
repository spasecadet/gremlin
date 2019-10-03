import React from 'react';

// Custom components
import ColoredLink from './buttons/ColoredLink';
import H3Title from './text/H3Title';

// Styles
import './SortList.scss';


/**
 * A non-dynamic list of sort options for the npm matches list.  Non-dynamic because specific mapping 
 * is needed for colors and rank type.
 * 
 * @param {Onject} props 
 */
function SortList(props) {
  const { className = '', currentSearch = '' } = props;

  return (
    <div className={`sortListContainer ${className}`}>
      <H3Title className='title'>Sort Packages</H3Title>
      <ul className='sortList'>
        <li className='sortListItem'>
          <ColoredLink to={`/?search=${currentSearch}&rank=optimal`} brandColor='quaternary'>Optimal</ColoredLink>
        </li>
        <li>
          <ColoredLink to={`/?search=${currentSearch}&rank=popularity`} brandColor='primary'>Popularity</ColoredLink>
        </li>
        <li>
          <ColoredLink to={`/?search=${currentSearch}&rank=quality`} brandColor='secondary'>Quality</ColoredLink>
        </li>
        <li>
          <ColoredLink to={`/?search=${currentSearch}&rank=maintenance`} brandColor='tertiary'>Maintenance</ColoredLink>
        </li>
      </ul>
    </div>
  );
}

export default SortList;
