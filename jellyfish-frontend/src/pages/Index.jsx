import { Link } from "react-router-dom";
import AllJellyfish from "../components/AllJellyfish";
import image from "../components/image/water_sky.jpeg";
import { useState, useEffect } from "react";

import "./Index.css";

function Index() {

  document.body.className = "second-background"

  return (
    <div className="Index">
      <div className="Index-bg"></div>
      <div className="inner">
        <h2>Jellyfish List</h2>
        <Link to="/jellyfish/new" className="header-link">
          <button className="new-btn">NEW JELLYFISH</button>
        </Link>
      </div>
      <AllJellyfish />
    </div>
  );
}

export default Index;