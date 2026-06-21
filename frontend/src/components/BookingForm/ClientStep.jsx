import React from 'react';

function ClientStep({ 
  selectedService, 
  selectedMaster, 
  selectedDate, 
  selectedTime, 
  daysList, 
  name, 
  onChangeName, 
  phone, 
  onChangePhone, 
  onSubmit, 
  isSubmitting, 
  onBack 
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h3 className="font-serif text-xl text-stone-900 font-black uppercase">Ваши контакты</h3>
      
      {/* Сводка о заказе */}
      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-stone-500 font-semibold uppercase">Услуга:</span>
          <span className="font-bold text-stone-900">{selectedService?.name}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-stone-500 font-semibold uppercase">Мастер:</span>
          <span className="font-bold text-stone-900">{selectedMaster?.name}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-stone-500 font-semibold uppercase">Дата и время:</span>
          <span className="font-bold text-stone-900">{daysList.find(d => d.isoString === selectedDate)?.formatted}, в {selectedTime}</span>
        </div>
        <div className="flex justify-between border-t border-stone-200 pt-3 text-sm">
          <span className="text-stone-900 font-extrabold uppercase">К оплате:</span>
          <span className="whitespace-nowrap font-serif font-black text-stone-900">{selectedService?.price}&nbsp;₽</span>
        </div>
      </div>

      {/* Поля ввода */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Ваше имя</label>
          <input
            type="text"
            required
            placeholder="Екатерина"
            value={name}
            onChange={onChangeName}
            className="w-full px-5 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-900 font-sans text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Номер телефона</label>
          <input
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={onChangePhone}
            className="w-full px-5 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:border-stone-900 font-sans text-sm font-medium"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4.5 bg-stone-900 text-stone-50 hover:bg-stone-700 disabled:bg-stone-400 disabled:cursor-not-allowed transition-colors font-sans text-xs tracking-widest uppercase font-black rounded-xl"
      >
        {isSubmitting ? 'Оформляем запись...' : 'Подтвердить запись'}
      </button>

      <button type="button" onClick={onBack} className="text-xs text-stone-500 font-bold uppercase tracking-wider block hover:text-stone-900 mx-auto">
        &larr; Назад к времени
      </button>
    </form>
  );
}

export default ClientStep;