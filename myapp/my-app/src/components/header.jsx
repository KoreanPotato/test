import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header() {
  return (
    <header>
      <nav >
        <Link to="/dashboard">Home Page</Link>
        <Link to="/schedule">My schedule</Link>
      </nav>
      <h1>StudyMate</h1>
    </header>
  );
}

export default Header;
