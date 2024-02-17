import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieState from './Context/MovieState';
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <MovieState>
    <Navbar/>
    <Home/>
    </MovieState>
    </BrowserRouter>
    </>
  );
}

export default App;
