import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Fill } from 'react-icons/ri';
export default function DeleteButton({ id, onDelete, size }) {
  return (
    <span className="text-black-700 inline-flex items-center leading-none text-sm">
      <RiDeleteBin6Fill
        onClick={() => onDelete(id)}
        size={size}
        className="cursor-pointer"
      />
    </span>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
