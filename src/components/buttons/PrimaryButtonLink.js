import React from 'react';
import ButtonLink from './ButtonLink';

// Styles
import './PrimaryButtonLink.scss';

/**
 * Wrapper to extend the style of a button to produce a reusable button that is 
 * the primary/happy path button.
 *
 * @param {Object} props
 */
function PrimaryButton(props) {
  const { className = '', ...others } = props;
  return (
    <ButtonLink className={'primaryButtonLink ' + className} {...others}>{props.children}</ButtonLink>
  );
}

export default PrimaryButton;