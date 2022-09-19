import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
export default function DeleteButton({ id, onDelete }) {
  return (
    <span className="text-black-700 inline-flex items-center leading-none text-sm">
      <RiDeleteBin6Fill
        onClick={() => onDelete(id)}
        size={30}
        className="cursor-pointer"
      />
    </span>
  );
}
