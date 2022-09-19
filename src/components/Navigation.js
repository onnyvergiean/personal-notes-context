import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
export default function Navigation() {
  return (
    <>
      <div className="divide-x">Navigation</div>

      <AiFillPlusCircle size={40} />
      <Link to="/notes/archived">
        <RiInboxArchiveFill size={40} />
      </Link>
    </>
  );
}
