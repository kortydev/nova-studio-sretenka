import React from 'react';

function ServiceStep({ services, selectedService, onSelectService }) {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-xl text-stone-900 mb-4 font-black uppercase">Выберите процедуру</h3>
      
      {/* Список услуг */}
      <div className="space-y-3">
        {services.map(service => (
          <button
            key={service.id}
            onClick={() => onSelectService(service)}
            className={`w-full p-5 text-left rounded-xl border transition-all flex justify-between items-center ${
              selectedService?.id === service.id 
                ? 'border-stone-900 bg-stone-900 text-stone-50 shadow-md' 
                : 'border-stone-200 bg-white text-stone-900 hover:border-stone-400'
            }`}
          >
            <div>
              <span className="font-sans text-sm font-bold block">{service.name}</span>
              <span className={`font-sans text-xs ${selectedService?.id === service.id ? 'text-stone-300' : 'text-stone-500'}`}>{service.duration}</span>
            </div>
            <span className="whitespace-nowrap font-serif text-sm font-black">{service.price}&nbsp;₽</span>
          </button>
        ))}
      </div>

      {/* Полезное текстовое примечание (по ТЗ Марии!) */}
      <p className="font-sans text-[10px] text-stone-500 font-bold leading-relaxed pt-2">
        * Мытье головы с уходом Kevin Murphy и экспресс-укладка Dyson уже включены в стоимость всех услуг.
      </p>
    </div>
  );
}

export default ServiceStep;