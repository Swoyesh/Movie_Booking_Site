import Navbar from './components/Navbar';
import MovieState from './Context/MovieState';
import Home from './components/Home'
import Login from './components/Login'
import Forgo from './components/Forgo'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Career from './components/Career';
import Ticker from './components/Ticker';

function App() {
  return (
    <>
    <MovieState>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/fpassword" element={<Forgo/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "career" element = {<Career/>}/>
      <Route path = "rate" element = {<Ticker/>}/>
    </Routes>
    </BrowserRouter>
    </MovieState>
    </>
  );
}

export default App;
