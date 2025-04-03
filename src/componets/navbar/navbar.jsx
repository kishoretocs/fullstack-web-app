import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-outer">
      <div className="navbar-container">
        <div className="nav-left">
          <a href="/" className="nav-item">Home</a>
          {/* <span className="separator">......</span> */}
          <a href="/jobs" className="nav-item">Find Jobs</a>
          {/* <span className="separator">......</span> */}
          <a href="/talents" className="nav-item">Find Talents</a>
          {/* <span className="separator">......</span> */}
          <a href="/about" className="nav-item">About us</a>
          {/* <span className="separator">......</span> */}
          <a href="/testimonials" className="nav-item">Testimonials</a>
        </div>

        <div className="nav-right">
          <button className="create-job-btn">
            Create Jobs
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;