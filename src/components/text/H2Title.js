import React from 'react';

// Styles
import './H2Title.scss';

/**
 * Reusable set style for <h2>
 *
 * @param {Object} props
 */
function H2Title(props) {
  return (<h2 className='h2Title'>{props.children}</h2>);
}

export default H2Title;