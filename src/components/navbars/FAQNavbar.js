import React from 'react';
import Branding from '../branding/Branding';
import './Navbar.css';

import { Link } from 'react-router-dom';

function LandingNavbar() {
  return (
    <>
      <nav>
          <Branding></Branding>
          <div className="navLinks">
              <ul>
                  <li><Link to="read" className="reactLink">Read</Link></li>
                  <li><Link to="write" className="reactLink">Write</Link></li>
              </ul>
              <span>|</span>
              <div>
                  <p className="navUsername">Jimmy John</p>
              </div>
          </div>
      </nav>
    </>
  );
}

export default LandingNavbar;
