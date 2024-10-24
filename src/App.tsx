import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import BeerList from './components/BeerList';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/beerpage">Beer Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BeerList beers={[]} />} />
        <Route path="/beerpage" element={<BeerList beers={[]} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
