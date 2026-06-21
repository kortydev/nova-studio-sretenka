import React from 'react';

const CATEGORIES = [
  {
    title: "Архитектура волос & Стрижки",
    items: [
      { name: "Женская стрижка (Vidal Sassoon)", price: "3 500 ₽", desc: "Точная геометрическая стрижка, не требующая укладки, + уход-массаж." },
      { name: "Мужская стрижка (Барбер-концепт)", price: "2 500 ₽", desc: "Классическая или текстурная стрижка с мытьем и стайлингом Oribe." },
      { name: "Укладка фэшн-текстура (Dyson)", price: "2 500 ₽", desc: "Объем, локоны или идеально прямые волосы для вашего мероприятия." }
    ]
  },
  {
    title: "Сложное окрашивание & Колористика",
    items: [
      { name: "Сложное окрашивание (Airtouch / Shatush)", price: "от 8 500 ₽", desc: "Мягкий бесшовный переход цвета с максимальным сохранением качества." },
      { name: "Тотал-блонд & Осветление", price: "от 6 000 ₽", desc: "Безупречный чистый блонд с глубоким протеиновым восстановлением." },
      { name: "Тонирование волос (Kydra)", price: "4 000 ₽", desc: "Обновление цвета, придание глянцевого блеска и сочности оттенку." }
    ]
  },
  {
    title: "Люкс-уход & Восстановление",
    items: [
      { name: "Клеточное восстановление Tokio Inkarami", price: "5 000 ₽", desc: "Глубокая реконструкция структуры волос, восполнение кератина." },
      { name: "Маникюр + Покрытие гель-лаком Luxio", price: "2 500 ₽", desc: "Деликатная обработка, выравнивание и премиальное стойкое покрытие." },
      { name: "Коррекция & Окрашивание бровей", price: "1 800 ₽", desc: "Создание идеальной формы под архитектуру вашего лица." }
    ]
  }
];

function Menu({ onOpenBooking }) {
  return (
    <section id="services" className="bg-stone-100 text-stone-900 py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="max-w-xl mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-stone-500 block mb-3 font-semibold">
            Кастомный уход
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-black uppercase text-stone-900">
            Прайс-лист услуг
          </h2>
        </div>

        {/* Сетка категорий прайса */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              {/* Название категории */}
              <h3 className="font-serif text-lg md:text-xl font-bold border-b border-stone-300 pb-3 uppercase tracking-wider text-stone-900">
                {cat.title}
              </h3>
              
              {/* Список услуг */}
              <div className="space-y-6">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-pointer">
                    {/* Применили whitespace-nowrap для защиты от разрыва цен */}
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-sans text-sm font-bold text-stone-900 group-hover:text-stone-500 transition-colors">
                        {item.name}
                      </span>
                      <span className="font-serif text-sm font-black text-stone-900 ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-stone-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Побуждение к действию (CTA) */}
        <div className="mt-16 text-center">
          <button 
            onClick={onOpenBooking}
            className="inline-block px-10 py-4 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors font-sans text-xs tracking-widest uppercase font-black rounded-xl shadow-md"
          >
            Подобрать время и записаться
          </button>
        </div>

      </div>
    </section>
  );
}

export default Menu;