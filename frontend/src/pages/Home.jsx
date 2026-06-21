import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Specialists from '../components/Specialists';
import Testimonials from '../components/Testimonials';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm/index.jsx';

function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Функция для живого показа уведомления на 3 секунды
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <>
      {/* Шапка сайта */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      
      {/* Главный экран */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Раздел О нас */}
      <About />

      {/* Раздел Прайс-листа услуг */}
      <Menu onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Раздел Мастеров */}
      <Specialists />

      {/* Раздел Отзывов */}
      <Testimonials />

      {/* Раздел Контактов и карты */}
      <Contacts />

      {/* Исправили: Теперь точно передаем функцию в Футер! */}
      <Footer onShowToast={showToast} />

      {/* Уведомление с маской скругления 12px */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-stone-50 px-6 py-3.5 rounded-xl shadow-lg text-[10px] md:text-xs tracking-widest uppercase font-black text-center border border-stone-800 animate-slide-up">
          {toastMessage}
        </div>
      )}

      {/* Модалка бронирования */}
      {isBookingOpen && (
        <BookingForm onClose={() => setIsBookingOpen(false)} />
      )}
    </>
  );
}

export default Home;