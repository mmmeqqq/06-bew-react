import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md" >
      <ul className="flex justify-end gap-4 mx-auto p-4">
        <li>
          <Link to="/" className="text-gray-700 hover:text-gray-900 hover:font-semibold">Home</Link>
        </li>
        <li>
          <Link to ="/owner" className="text-gray-700 hover:text-gray-900 hover:font-semibold">Owner</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
