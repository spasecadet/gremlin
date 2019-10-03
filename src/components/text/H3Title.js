import React from 'react';

// Styles
import './H3Title.scss';


/**
 * Reusable set style for <h3>
 *
 * @param {Object} props
 */
function H3Title(props) {
  return (<h3 className='h3Title'>{props.children}</h3>);
}

export default H3Title;