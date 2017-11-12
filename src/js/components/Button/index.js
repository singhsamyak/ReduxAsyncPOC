import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ isDisabled, name, type, value }) => {
  const className = isDisabled ? 'button disabled' : 'button';
  return (
    <input
      className={className}
      name={name}
      type={type}
      value={value} />
  );
}

Button.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Button;
