import React from 'react';
import { CheckCircle } from 'lucide-react';

function SuccessStep({ name, selectedTime, selectedDate, daysList, selectedMaster, onClose }) {
  return (
    // Добавили фиксированный полупрозрачный оверлей с размытием фона, чтобы центрировать карточку
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Клик по фону закрывает окно */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Сама карточка успеха со скруглением 12px */}
      <div className="bg-stone-100 w-full max-w-lg rounded-t-xl sm:rounded-xl p-8 md:p-12 text-center shadow-2xl border border-stone-200 relative z-10 animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-stone-900 text-stone-50 rounded-full">
            <CheckCircle size={40} className="stroke-[1.5]" />
          </div>
        </div>
        <h2 className="font-serif text-3xl text-stone-900 mb-4 uppercase font-black">Запись оформлена</h2>
        <p className="font-sans text-stone-600 mb-8 leading-relaxed text-sm">
          Спасибо, <span className="font-bold">{name}</span>! Мы забронировали для вас слот <span className="font-bold">{selectedTime}</span> на <span className="font-bold">{daysList.find(d => d.isoString === selectedDate)?.formatted}</span> к мастеру <span className="font-bold">{selectedMaster?.name}</span>. Наш администратор свяжется с вами для подтверждения визита.
        </p>
        <button 
          onClick={onClose}
          className="w-full py-4 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors font-sans text-xs tracking-widest uppercase font-black rounded-xl"
        >
          Закрыть окно
        </button>
      </div>
    </div>
  );
}

export default SuccessStep;