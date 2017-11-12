import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ autocomplete, name, onChange, placeholder, type, value}) => {
  return (
    <input
      autoComplete={autocomplete}
      className='inputField'
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}/>
  );
}

InputField.propTypes = {
  autocomplete: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default InputField;
