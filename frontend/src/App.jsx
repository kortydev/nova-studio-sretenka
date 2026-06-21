import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin/index.jsx';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      {/* Наш красивый Fluid-лейаут на 100% ширины экрана */}
      <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col justify-between relative animate-fade-in">
        <Routes>
          {/* Главная страница (подгружает Home.jsx со всеми блоками) */}
          <Route path="/" element={<Home />} />
          
          {/* Кабинет входа админа */}
          <Route path="/login" element={<AdminLogin />} />
          
          {/* Админка */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;