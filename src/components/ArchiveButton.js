import React from 'react';
import PropTypes from 'prop-types';
import { RiInboxArchiveFill } from 'react-icons/ri';
export default function ArchiveButton({ id, onArchive, size }) {
  return (
    <>
      <span className="text-black-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 ">
        <RiInboxArchiveFill
          onClick={() => onArchive(id)}
          size={size}
          className="cursor-pointer"
        />
      </span>
    </>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
