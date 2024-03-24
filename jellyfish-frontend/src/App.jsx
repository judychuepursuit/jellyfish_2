import { useState } from 'react'
// import React from 'react';
import './App.css'

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import NavBar from "./components/NavBar";
import FourOFour from "./pages/FourOFour";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";

function App() {
  return (
    <div className="Jellyfish">
      <Router>
      <Header/>
      <NavBar />
      {/* <Props name='Yu Xie' /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jellyfish" element={<Index />} />
            <Route path="/jellyfish/new" element={<New />} />
            <Route path="/jellyfish/:id" element={<Show />} />
            <Route path="/jellyfish/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/jellyfish/*" element={<FourOFour />} />
          </Routes>
          </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;