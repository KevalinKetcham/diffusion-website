import React from 'react';
import Branding from '../branding/Branding';
import User from './user/User';
import './Navbar.css';

import { Link } from 'react-router-dom';

function AuthorNavbar() {
  return (
    <>
        <nav>
            <Branding></Branding>
            <div className="navLinks">
                <ul>
                    <li><a className="discord" href="https://discord.gg/kuFydc8TeS" target="_blank" rel="noreferrer">Discord Server</a></li>
                    <li><Link to="faq" className="reactLink">FAQs</Link></li>
                    <li><Link to="read" className="reactLink">Read</Link></li>
                </ul>
                <User />
            </div>
        </nav>
    </>
  );
}

export default AuthorNavbar;
