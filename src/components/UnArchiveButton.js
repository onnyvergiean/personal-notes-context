import React from 'react';
import { RiInboxUnarchiveFill } from 'react-icons/ri';
export default function UnArchiveButton({ id, onUnArchive }) {
  return (
    <>
      <span className="text-black-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 ">
        <RiInboxUnarchiveFill
          size={30}
          onClick={() => onUnArchive(id)}
          className="cursor-pointer"
        />
      </span>
    </>
  );
}
