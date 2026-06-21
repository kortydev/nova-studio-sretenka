import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

function Header({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-stone-100/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Уникальный кастомный логотип с фэшн-кернингом и контрастным курсивом по ТЗ Виктории */}
        <a href="/" className="group flex items-baseline">
          <span className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-stone-900 font-black">
            NOVA
          </span>
          <span className="font-serif text-xs md:text-sm italic lowercase text-stone-500 ml-2 tracking-normal transition-colors group-hover:text-bronze-accent">
            sretenka
          </span>
        </a>

        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-sans text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors font-semibold">Философия</a>
          <a href="#services" className="font-sans text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors font-semibold">Прайс</a>
          <a href="#specialists" className="font-sans text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors font-semibold">Команда</a>
          <a href="#contacts" className="font-sans text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors font-semibold">Локация</a>
        </nav>

        {/* Строгое скругление кнопок 12px */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenBooking} 
            className="px-6 py-2.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 font-sans text-xs tracking-widest uppercase transition-all duration-300 font-bold rounded-xl"
          >
            Записаться
          </button>
        </div>

        {/* Бургер для мобильных */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-stone-900 p-2 hover:text-bronze-accent transition-colors focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-8 space-y-6 flex flex-col">
          <a onClick={() => setIsOpen(false)} href="#about" className="font-sans text-sm tracking-widest uppercase text-stone-900 hover:text-bronze-accent transition-colors">Философия</a>
          <a onClick={() => setIsOpen(false)} href="#services" className="font-sans text-sm tracking-widest uppercase text-stone-900 hover:text-bronze-accent transition-colors">Прайс</a>
          <a onClick={() => setIsOpen(false)} href="#specialists" className="font-sans text-sm tracking-widest uppercase text-stone-900 hover:text-bronze-accent transition-colors">Команда</a>
          <a onClick={() => setIsOpen(false)} href="#contacts" className="font-sans text-sm tracking-widest uppercase text-stone-900 hover:text-bronze-accent transition-colors">Локация</a>
          <button 
            onClick={() => { setIsOpen(false); onOpenBooking(); }} 
            className="w-full py-4 bg-stone-900 text-stone-50 font-sans text-xs tracking-widest uppercase font-bold rounded-xl transition-all duration-300"
          >
            Записаться онлайн
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;