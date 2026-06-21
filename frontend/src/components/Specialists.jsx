import React from 'react';

const SPECIALISTS = [
  {
    name: "Елена Морозова",
    role: "Топ-стилист // Опыт 9 лет",
    desc: "Специалист по точным геометрическим стрижкам Vidal Sassoon, кастомной архитектуре волос и глубоким клеточным восстановлениям Tokio Inkarami.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500&q=80",
    align: "lg:self-start"
  },
  {
    name: "Александр Власов",
    role: "Ведущий колорист // Опыт 8 лет",
    desc: "Эксперт в сложных техниках окрашивания (Airtouch, Shatush, Balayage) и деликатном тонировании Kydra. Создает благородные чистые блонды.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=80",
    align: "lg:self-center lg:mt-16"
  },
  {
    name: "Анна Демидова",
    role: "Нейл-мастер // Опыт 6 лет",
    desc: "Мастер безупречного аппаратного маникюра, педикюра и стойкого люксового покрытия Luxio с выравниванием ногтевой пластины.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=500&q=80",
    align: "lg:self-end lg:mt-32"
  }
];

function Specialists() {
  return (
    <section id="specialists" className="bg-stone-50 text-stone-900 py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="max-w-xl mb-16 lg:mb-24">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-stone-500 block mb-3 font-semibold">
            Команда экспертов
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-black uppercase text-stone-900">
            Наши мастера
          </h2>
        </div>

        {/* Асимметричная staggered-сетка (мастера смещены по вертикали на десктопе) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-8 lg:min-h-[650px]">
          {SPECIALISTS.map((master, index) => (
            <div 
              key={index} 
              className={`group flex flex-col items-start flex-1 ${master.align}`}
            >
              {/* Строгое скругление 12px (rounded-xl) */}
              <div className="w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-stone-200 shadow-md shadow-stone-950/5 mb-6 relative">
                <img 
                  src={master.image} 
                  alt={master.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Информация */}
              <div className="space-y-2">
                <span className="font-sans text-[10px] tracking-widest uppercase text-stone-500 font-bold block">
                  {master.role}
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-bronze-accent transition-colors">
                  {master.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                  {master.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specialists;