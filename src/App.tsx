import React from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import './App.css';
import About from './components/About';
import BookList from './components/BookList';


function App() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/biblio">Bibliothèque</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/biblio" element={<BookList books={[]} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/biblio" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
