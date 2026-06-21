import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Маргарита — Москва",
    service: "Женская стрижка (Vidal Sassoon)",
    text: "Долго искала мастера по коротким точным стрижкам Vidal Sassoon на Сретенке. Елена Морозова сделала идеальную форму, волосы после обычного мытья ложатся сами без укладки. Из минусов — сложно записаться на вечер выходных, места разбирают моментально.",
    stars: 5
  },
  {
    name: "Илья — Москва",
    service: "Мужская стрижка & Камуфляж седины",
    text: "Спокойный, не кричащий интерьер и отличный сервис. Стилист Александр Власов качественно подобрал камуфляж седины, цвет абсолютно естественен на солнце и держится долго. Администратор сварил хороший фильтр-кофе. Ценник выше среднего, но качество полностью соответствует.",
    stars: 5
  },
  {
    name: "Юлия — Москва",
    service: "Airtouch & Маникюр Luxio",
    text: "Делала сложное окрашивание у Александра. Цвет получился очень естественным, мягким. Салон светлый, чистый. Сняла один балл за то, что задержали начало приема на 10 минут, но мастер извинился и сделал приятный люкс-уход в подарок.",
    stars: 4 // Уникальный честный 4-звездочный отзыв для 100% доверия!
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand-bg text-stone-900 py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="max-w-xl mb-16">
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-black uppercase text-stone-900">
              Отзывы гостей
          </h2>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* 5 звезд или 4 звезды (настоящие, не прилизанные!) */}
                <div className="flex space-x-1 text-stone-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`stroke-none ${i < review.stars ? 'fill-stone-400' : 'fill-stone-200'}`} 
                    />
                  ))}
                </div>
                
                {/* Текст отзыва */}
                <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Автор и процедура */}
              <div className="border-t border-stone-200 pt-4 mt-6">
                <span className="font-sans text-xs text-stone-900 font-bold block">
                  {review.name}
                </span>
                <span className="font-sans text-[10px] tracking-wider uppercase text-stone-500 font-semibold mt-1 block">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;