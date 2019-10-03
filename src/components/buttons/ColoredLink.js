import React from 'react';

// Custom components
import ButtonLink from './ButtonLink';

// Styles
import './ColoredLink.scss';

/**
 * Wrapper to extend the style of a link to produce in this case a colored link.
 * 
 * @param {Object} props 
 */
function ColoredLink(props) {
  const { className, brandColor, ...others } = props;

  return (
    <ButtonLink className={`coloredLink ${className} ${brandColor}`} {...others}>{props.children}</ButtonLink>
  )
};

export default ColoredLink;
