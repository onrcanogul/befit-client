import './App.css';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nutrients from './pages/nutrients/Nutrients';

function App() {
  return (
    <>
      <Header />
      <Nutrients />
      <Footer />
      </>
  );
}

export default App;
