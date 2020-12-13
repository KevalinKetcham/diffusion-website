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
                    <li><a href="https://www.discord.com" target="_blank" rel="noreferrer">Discord Server</a></li>
                    <li><Link to="faq" className="reactLink">FAQs</Link></li>
                    <li><Link to="read" className="reactLink">Read</Link></li>
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
