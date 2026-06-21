import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

function AdminFilters({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
      <div className="relative w-full lg:max-w-md">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"><Search size={16} /></span>
        <input
          type="text"
          placeholder="Поиск по клиенту..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:border-stone-900 font-sans text-xs sm:text-sm font-semibold"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-end">
        <div className="flex items-center space-x-2 text-stone-400 self-start sm:self-auto">
          <SlidersHorizontal size={14} />
          <span className="text-[10px] uppercase font-bold tracking-wider">Фильтр:</span>
        </div>
        <div className="flex flex-wrap gap-1 w-full sm:w-auto">
          {['Все', 'Новая', 'Подтверждена', 'Отменена'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                statusFilter === status 
                  ? 'bg-stone-900 text-stone-50' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminFilters;