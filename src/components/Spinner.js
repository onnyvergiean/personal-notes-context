import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={267} width={175} />
);

export default Spinner;

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
