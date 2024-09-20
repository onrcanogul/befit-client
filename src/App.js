import './App.css';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      </>
  );
}

export default App;
