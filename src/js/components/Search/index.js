import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

const Search = ({ onSubmit, inputFieldProps }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField {...inputFieldProps} />
    </form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputFieldProps: PropTypes.object.isRequired
}

export default Search;
