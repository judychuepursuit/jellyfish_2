import { useState } from 'react'
import React from 'react';
import './App.css'
import './index.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="Jellyfish">
      <Router>
      <NavBar />
      <Header/>
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