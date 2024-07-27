import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MovieState from './Context/MovieState';
import Home from './components/Home';
import Login from './components/Login';
import Forgo from './components/Forgo';
import Contact from './components/Contact';
import Career from './components/Career';
import Ticker from './components/Ticker';
import Buy from './components/Buy';
import MovieID from './components/MovieID';
// import MovieCollection from './components/MovieCollection';
import Navbar from './components/Navbar';
import './App.css';
import Fbuy from './components/Fbuy';

const App = () => {
  return (
    <MovieState>
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fbuy" element={<Fbuy />} />
          <Route path="/fpassword" element={<Forgo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/rate" element={<Ticker />} />
          {/* <Route exact path="/" component={MovieCollection} /> */}
          <Route path="/buy/:name/:id" element={<Buy />} />
          <Route path="/movieid/:name/:id" element={<MovieID />} />
        </Routes>
      </BrowserRouter>
    </MovieState>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  const shouldShowNavbar = !location.pathname.startsWith("/movieid");

  return shouldShowNavbar ? <Navbar /> : null;
};

export default App;