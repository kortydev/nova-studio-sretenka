import React from 'react';

function Footer({ onShowToast }) {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Копирайт бренда */}
        <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-500 text-center sm:text-left">
          © 2026 NOVA STUDIO. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </div>

        {/* Утонченные текстовые фэшн-ссылки в нижнем регистре с деликатным подчеркиванием по ТЗ Виктории */}
        <div className="flex items-center space-x-6 text-[10px] tracking-[0.15em] lowercase font-bold text-stone-400">
          <button 
            onClick={() => onShowToast('Проект запущен в демо-режиме. Telegram недоступен')} 
            className="hover:text-white transition-colors border-b border-stone-800/40 hover:border-white pb-0.5 focus:outline-none"
          >
            telegram
          </button>
          <button 
            onClick={() => onShowToast('Проект запущен в демо-режиме. Instagram недоступен')} 
            className="hover:text-white transition-colors border-b border-stone-800/40 hover:border-white pb-0.5 focus:outline-none"
          >
            instagram
          </button>
          <button 
            onClick={() => onShowToast('Проект запущен в демо-режиме. Pinterest недоступен')} 
            className="hover:text-white transition-colors border-b border-stone-800/40 hover:border-white pb-0.5 focus:outline-none"
          >
            pinterest
          </button>
        </div>

        {/* Подпись разработчика */}
        <div className="font-sans text-[10px] tracking-[0.2em] text-stone-600 text-center sm:text-right">
          designed & developed by <span className="text-stone-400 font-bold select-all">korty</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;