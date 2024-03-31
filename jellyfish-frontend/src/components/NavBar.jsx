import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

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



// edited to be like Jose'

//  function NavBar () {
//    return (
//      <nav className='container'>
//          <section className='main'></section>
//         <section className='categories-section'>
//             <h6>Jellyfish</h6>
//             <h6>Jellyfish Information</h6>
//             <h6>Add or Edit Jellyfish</h6>
//         </section> 
//      </nav>
//    );
//  }