import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Простой демонстрационный вход для твоего портфолио
    if (email === 'admin@nova.ru' && password === 'admin123') {
      localStorage.setItem('admin_token', 'logged_in_demo_token');
      navigate('/admin');
    } else {
      setError('Неверный логин или пароль.');
    }
  };

  return (
    <div className="flex-1 bg-stone-100 flex items-center justify-center px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 md:p-12 rounded-[2.5rem] border border-stone-200 shadow-lg shadow-stone-900/5">
        
        <div className="text-center mb-10">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-stone-500 block mb-3 font-semibold">
            Панель управления
          </span>
          <h2 className="font-serif text-3xl font-black uppercase text-stone-900">Вход в систему</h2>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Демонстрационный доступ (по ТЗ!) */}
        <div className="mb-8 p-5 bg-stone-50 rounded-2xl border border-divider">
          <span className="block text-xs uppercase font-extrabold text-stone-500 mb-2">Демонстрационные данные</span>
          <div className="text-xs text-stone-600 space-y-1 font-mono">
            <div>Логин: <span className="font-bold text-stone-900 select-all">admin@nova.ru</span></div>
            <div>Пароль: <span className="font-bold text-stone-900 select-all">admin123</span></div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Email</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"><User size={18} /></span>
              <input
                type="email"
                required
                placeholder="admin@nova.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-900 font-sans text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Пароль</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"><Lock size={18} /></span>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-900 font-sans text-sm font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors font-sans text-xs tracking-widest uppercase font-black rounded-full"
          >
            Войти в кабинет
          </button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;