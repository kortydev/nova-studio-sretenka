import React from 'react';

function DateTimeStep({ daysList, selectedDate, onSelectDate, timeSlots, bookedTimes, selectedTime, onSelectTime, onBack }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-end mb-3">
          <h4 className="font-serif text-sm text-stone-900 uppercase font-extrabold tracking-wider">Дата визита</h4>
          <span className="text-[10px] uppercase text-stone-500 font-bold animate-pulse">Прокрутите вправо &rarr;</span>
        </div>
        
        <div className="relative">
          <div className="flex space-x-3 overflow-x-auto pb-3 snap-x scrollbar-none">
            {daysList.map(day => (
              <button
                key={day.isoString}
                onClick={() => onSelectDate(day.isoString)}
                className={`snap-center flex-shrink-0 px-5 py-3 rounded-xl border text-center transition-all ${
                  selectedDate === day.isoString
                    ? 'border-stone-900 bg-stone-900 text-stone-50 font-bold'
                    : 'border-stone-200 bg-white text-stone-900 hover:border-stone-400'
                }`}
              >
                <span className="text-[10px] uppercase block font-semibold">{day.formatted.split(',')[0]}</span>
                <span className="text-lg font-serif font-black block leading-none mt-1">{day.formatted.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedDate && (
        <div>
          <h4 className="font-serif text-sm text-stone-900 mb-3 uppercase font-extrabold tracking-wider">Доступное время</h4>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map(time => {
              const isBooked = bookedTimes.includes(time);
              return (
                <button
                  key={time}
                  disabled={isBooked}
                  onClick={() => onSelectTime(time)}
                  className={`py-3 rounded-xl text-center font-sans text-xs font-bold transition-all ${
                    isBooked 
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed border border-transparent' 
                      : selectedTime === time
                        ? 'border-stone-900 bg-stone-900 text-stone-50'
                        : 'border border-stone-200 bg-white text-stone-900 hover:border-stone-400'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button onClick={onBack} className="text-xs text-stone-500 font-bold uppercase tracking-wider block hover:text-stone-900">
        &larr; Назад к мастерам
      </button>
    </div>
  );
}

export default DateTimeStep;