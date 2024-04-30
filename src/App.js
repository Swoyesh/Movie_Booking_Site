import Navbar from './components/Navbar';
import MovieState from './Context/MovieState';
import Home from './components/Home'
import Login from './components/Login'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    </Routes>
    </BrowserRouter>
    </MovieState>
    </>
  );
}

export default App;
