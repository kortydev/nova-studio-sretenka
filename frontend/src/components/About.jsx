import React from 'react';

const PRINCIPLES = [
  {
    title: "Английская школа геометрии",
    desc: "Стрижки по британским техникам Vidal Sassoon. Стрижка держит безупречную форму без укладки."
  },
  {
    title: "Люксовые эко-бренды",
    desc: "Работаем исключительно на сертифицированных составах Oribe, Kevin Murphy, Tokio Inkarami."
  },
  {
    title: "Сложная колористика",
    desc: "Бесшовные переходы Airtouch, Shatush и глянцевое тонирование Kydra без повреждения волос."
  }
];

function About() {
  return (
    <section id="about" className="bg-stone-50 text-stone-900 py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Асимметричная двухколоночная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Левая колонка — Убран дублирующий абзац и лишний подзаголовок по ТЗ Марии */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight font-black uppercase text-stone-900 leading-snug pb-3">
              Архитектура ухода
            </h2>
            <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">
              Наша философия строится на возвращении к естественной текстуре волос. Мы отказались от агрессивных химических составов в пользу эко-брендов и точной английской геометрии стрижек, которая не требует сложной утренней укладки.
            </p>
          </div>

          {/* Правая колонка */}
          <div className="lg:col-span-7 space-y-8 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
            {PRINCIPLES.map((item, index) => (
              <div 
                key={index} 
                className={`pb-6 ${index !== PRINCIPLES.length - 1 ? 'border-b border-stone-200' : ''}`}
              >
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="font-serif text-sm text-stone-400 font-light">
                    0{index + 1}
                  </span>
                  <h3 className="font-sans text-xs sm:text-sm text-stone-900 tracking-wider uppercase font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-stone-600 font-normal leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;