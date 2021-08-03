import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
   return (
      <nav className="Nav">
         <Link to={'/'}>
            Home Page
          </Link>
         <Link to={'/restaurants'}>
            Restaurant List
          </Link>
         <Link to={'/signup'}>
            signup form
          </Link>


      </nav>
   )
}

export default Nav
