import './App.css';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nutrients from './pages/nutrients/Nutrients';
import Profile from './pages/profile/profile';
import Home from './pages/home/Home';
import {Auth} from "./pages/auth/auth";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nutrients' element={<Nutrients />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
        </>
  );
}

export default App;
