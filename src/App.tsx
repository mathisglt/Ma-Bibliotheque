import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import './App.css';
import BeerList from './components/BookList';
import About from './components/About';
import BookList from './components/BookList';


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
            <NavLink to="/biblio">Bibliothèque</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BookList books={[]} />} />
        <Route path="/biblio" element={<BeerList books={[]} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/beerlist" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
