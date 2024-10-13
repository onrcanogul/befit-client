import './App.css';
import { BrowserRouter, Routes, Router, Route, useNavigate } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nutrients from './pages/nutrients/Nutrients';
import Profile from './pages/profile/profile';
import Home from './pages/home/Home';
import { Auth } from "./pages/auth/auth";
import { ToastContainer } from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';
import { isAuthenticated, isTokenExpired, refreshTokenLogin } from "./services/authService";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired()) {
      refreshTokenLogin();
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nutrients' element={<Nutrients />} />
        <Route path='/auth' element={<Auth />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
