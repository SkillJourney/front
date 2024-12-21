import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import CorporatePage from './pages/CorporatePage';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/corporate' element={<CorporatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;