import React from 'react';

function MasterStep({ masters, selectedMaster, onSelectMaster, onBack }) {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-xl text-stone-900 mb-4 font-black uppercase">Выберите специалиста</h3>
      <div className="space-y-3">
        {masters.map(master => (
          <button
            key={master.id}
            onClick={() => onSelectMaster(master)}
            className={`w-full p-4 text-left rounded-xl border transition-all flex items-center space-x-4 ${
              selectedMaster?.id === master.id 
                ? 'border-stone-900 bg-stone-900 text-stone-50 shadow-md' 
                : 'border-stone-200 bg-white text-stone-900 hover:border-stone-400'
            }`}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-stone-200 bg-stone-100">
              <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-sans text-sm font-bold block">{master.name}</span>
              <span className={`font-sans text-xs ${selectedMaster?.id === master.id ? 'text-stone-300' : 'text-stone-500'}`}>{master.role}</span>
            </div>
          </button>
        ))}
      </div>
      <button onClick={onBack} className="text-xs text-stone-500 font-bold uppercase tracking-wider mt-4 block hover:text-stone-900">
        &larr; Назад к услугам
      </button>
    </div>
  );
}

export default MasterStep;