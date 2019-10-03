import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './ButtonLink.scss';


/**
 * Wrapper to style a <Link> like a button
 * 
 * @param {Object} props 
 */
function ButtonLink(props) {
  const { className = '', ...others } = props;

  return (
    <Link className={'buttonLink ' + className} {...others}>{props.children}</Link>
  );
}

export default ButtonLink;