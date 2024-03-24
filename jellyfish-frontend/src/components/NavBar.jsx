import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
// import React, { useState } from "react";
import './NavBar.css'

// edited to be like Jose'
function NavBar () {
  return (
    <nav className='container'>
        <section className='main'></section>
        <section className='categories-section'>
            <h6>Jellyfish</h6>
            <h6>Jellyfish Detail</h6>
            <h6>Add or Edit Jellyfish</h6>
        </section>
    </nav>
  );
}

// original navbar
// const NavBar = () => {
//   return (
//     <div>NavBar</div>
//   )
// }

export default NavBar