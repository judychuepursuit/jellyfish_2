import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import "../pages/Home.css";

// import React, { useState } from "react";
// import { useState } from "react";

function NavBar() {
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="/jellyfish/new">New Jellyfish</Link></li>
          <li><Link to="/jellyfish">Index</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
