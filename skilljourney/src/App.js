import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CardCategorie from './components/CardCategorie';
import StartPage from './pages/StartPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './pages/LoginPage';
import CorporatePage from './pages/CorporatePage';
import Layout from './components/Layout';
import Background from './components/Background';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Background />
      <Layout>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/corporate' element={<CorporatePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;