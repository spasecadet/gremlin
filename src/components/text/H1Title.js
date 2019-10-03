import React from 'react';

// Styles
import './H1Title.scss';

/**
 * Reusable set style for <h1>
 * 
 * @param {Object} props 
 */
function H1Title(props) {
  return (<h1 className='h1Title'>{props.children}</h1>);
}

export default H1Title;