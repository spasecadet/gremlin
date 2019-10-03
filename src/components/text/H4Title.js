import React from 'react';

// Styles
import './H4Title.scss';

/**
 * Reusable set style for <h4>
 *
 * @param {Object} props
 */
function H4Title(props) {
  return (<h4 className='h4Title'>{props.children}</h4>);
}

export default H4Title;