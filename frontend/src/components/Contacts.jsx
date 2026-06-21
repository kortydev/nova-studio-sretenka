import React from 'react';
import { MapPin, Phone, Clock, Car, Compass } from 'lucide-react';

function Contacts() {
  return (
    <section id="contacts" className="bg-stone-50 text-stone-900 py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Заголовок секции (убрали мелкий подзаголовок по ТЗ Марии) */}
        <div className="max-w-xl mb-16">
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-black uppercase text-stone-900">
            Как нас найти
          </h2>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая текстовая часть */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              
              {/* Адрес */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-stone-900 rounded-xl border border-stone-200 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-1">Адрес студии</h4>
                  <p className="font-sans text-sm text-stone-900 font-bold">
                    г. Москва, ул. Сретенка, д. 12
                  </p>
                  <span className="text-xs text-stone-500 font-normal block mt-1">
                    3 минуты пешком от м. Сухаревская (исторический центр)
                  </span>
                </div>
              </div>

              {/* Схема прохода */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-stone-900 rounded-xl border border-stone-200 mt-1">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-1">Схема прохода во двор</h4>
                  <p className="font-sans text-xs sm:text-sm text-stone-900 font-semibold leading-relaxed">
                    Вход во двор под арку со стороны Сретенского переулка. На домофоне у черных ворот наберите <span className="font-bold">12#</span>, пройдите прямо 20 метров — наша деревянная дверь расположена по левую сторону.
                  </p>
                </div>
              </div>

              {/* Парковка (Добавлены тарифы и бесплатный двор по ТЗ Марии!) */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white text-stone-900 rounded-xl border border-stone-200 mt-1">
                  <Car size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-1">Парковка</h4>
                  <p className="font-sans text-xs sm:text-sm text-stone-900 font-semibold leading-relaxed">
                    Городская платная парковка (зона 380 ₽/час) доступна на Сретенском переулке. Для гостей студии также предусмотрена собственная бесплатная парковка во дворе под шлагбаум. Пожалуйста, наберите администратора за 5 минут до приезда, и мы откроем ворота.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Правая часть — Премиальная кастомная схема проезда на чистом CSS (без соборов и карт мира!) */}
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] relative bg-stone-100 rounded-xl border border-stone-200 shadow-md p-6 flex flex-col justify-between overflow-hidden">
            
            {/* Наша абстрактная минималистичная векторная карта улиц */}
            <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
              {/* Линия ул. Сретенка */}
              <div className="absolute left-[30%] top-0 bottom-0 w-[2px] bg-stone-900"></div>
              <span className="absolute left-[23%] top-[40%] -rotate-90 font-sans text-[8px] tracking-widest uppercase text-stone-900 font-bold">ул. Сретенка</span>
              
              {/* Линия Сретенского переулка */}
              <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-stone-900"></div>
              <span className="absolute left-[40%] top-[63%] font-sans text-[8px] tracking-widest uppercase text-stone-900 font-bold">Сретенский пер.</span>
              
              {/* Пульсирующий маркер дома 12 */}
              <div className="absolute left-[30%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-bronze-accent opacity-30 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-bronze-accent border border-stone-100"></span>
              </div>
            </div>

            {/* Карточка-плашка с текстом и кнопкой по ТЗ Марии (Идеальный контраст) */}
            <div className="relative z-10 my-auto text-center space-y-5">
              <p className="font-serif text-lg md:text-xl font-bold text-stone-900">Nova Studio</p>
              <p className="font-sans text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                Nova Studio на Сретенке. Проложите удобный маршрут в Яндекс Картах или 2ГИС.
              </p>
              
              <a 
                href="https://yandex.ru/maps/-/CDGeEKLp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors font-sans text-xs tracking-widest uppercase font-black rounded-xl shadow-md"
              >
                Открыть в навигаторе
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacts;