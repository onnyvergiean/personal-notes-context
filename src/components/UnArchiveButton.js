import React from 'react';
import PropTypes from 'prop-types';
import { RiInboxUnarchiveFill } from 'react-icons/ri';
export default function UnArchiveButton({ id, onUnArchive, size }) {
  return (
    <>
      <span className="text-black-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 ">
        <RiInboxUnarchiveFill
          onClick={() => onUnArchive(id)}
          size={size}
          className="cursor-pointer"
        />
      </span>
    </>
  );
}

UnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnArchive: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
