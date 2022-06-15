import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="default-font">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
