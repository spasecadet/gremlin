import React from 'react';

// styles
import './Input.scss';


/**
 * Wrapper with basic style for input
 * 
 * @param {Object} props 
 */
function CustomInput(props) {
  const {
    className = '',
    ...others
  } = props;

  return (
    <input className={'input ' + className} {...others} />
  )
}

export default CustomInput;