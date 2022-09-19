import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

import { FaArchive } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
export default function Navigation() {
  return (
    <nav className="p-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className="self-center text-5xl font-semibold whitespace-nowrap ">
            Personal Notes
          </h1>
        </Link>

        <div className="w-full md:block md:w-auto">
          <ul className="flex mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
            <li>
              <Link to="/notes/new" className="block py-2 ">
                <AiFillPlusCircle size={40} />
              </Link>
            </li>
            <li>
              <Link to="/notes/archived" className="block py-2 pr-4">
                <FaArchive size={38} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
