import React from 'react';

function Hero({ onOpenBooking }) {
  return (
    <section className="bg-stone-100 py-12 md:py-20 px-6 border-b border-stone-200 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Реалистичный ярлык */}
        <div className="inline-flex items-center space-x-2 mb-6 bg-stone-50 px-4 py-1.5 rounded-full border border-stone-200">
          <span className="w-2 h-2 rounded-full bg-stone-400 animate-pulse"></span>
          <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-stone-500 font-bold">
            Москва // Сретенка 12 // Пространство теплого света и заботы
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl mb-6 text-stone-900 tracking-tight font-black uppercase">
          NOVA <br className="sm:hidden" />
          <span className="font-sans text-stone-500 text-3xl sm:text-5xl lg:text-6xl tracking-wide block mt-1 font-extralight lowercase italic">
            эстетика уединения
          </span>
        </h1>
        
        <p className="font-sans text-sm sm:text-base text-stone-600 mb-8 font-normal leading-relaxed max-w-lg mx-auto">
          Кастомная архитектура волос, стрижки по британским техникам Vidal Sassoon и сложная колористика в исполнении мастеров с опытом от 7 лет. Мы создали светлое, залитое солнцем пространство с мягкой мебелью и ароматом шалфея.
        </p>
        
        {/* Кнопка записи */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full sm:w-auto">
          <button 
            onClick={onOpenBooking} 
            className="w-full sm:w-auto px-10 py-4 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-all duration-300 font-sans text-xs tracking-widest uppercase font-black text-center rounded-xl shadow-md"
          >
            Выбрать время визита
          </button>
        </div>

        {/* НАСТОЯЩИЙ цветной интерьер парикмахерского зала (без стоматологических кресел!) */}
        <div className="w-full h-[280px] sm:h-[450px] relative bg-stone-50 overflow-hidden rounded-xl shadow-lg shadow-stone-900/5 border border-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80" 
            alt="Залитый теплым светом интерьер Nova Studio" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;