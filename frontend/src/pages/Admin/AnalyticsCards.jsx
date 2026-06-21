import React from 'react';
import { Calendar, DollarSign, BarChart2, UserCheck } from 'lucide-react';

function AnalyticsCards({ analytics }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-stone-100 text-stone-800 rounded-xl"><Calendar size={20} /></div>
        <div>
          <span className="text-[10px] uppercase text-stone-500 font-extrabold tracking-wider block mb-1">Всего записей</span>
          <span className="text-2xl font-sans font-bold tracking-tight tabular-nums text-stone-900">{analytics.totalBookings}</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-stone-100 text-stone-800 rounded-xl"><DollarSign size={20} /></div>
        <div>
          <span className="text-[10px] uppercase text-stone-500 font-extrabold tracking-wider block mb-1">Ожидаемая касса</span>
          <span className="text-2xl font-sans font-bold tracking-tight tabular-nums text-stone-900">{analytics.forecastedRevenue} ₽</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-stone-100 text-stone-800 rounded-xl"><BarChart2 size={20} /></div>
        <div>
          <span className="text-[10px] uppercase text-stone-500 font-extrabold tracking-wider block mb-1">Удержание (Retention)</span>
          <span className="text-2xl font-sans font-bold tracking-tight tabular-nums text-stone-900">{analytics.retentionRate}%</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-center space-x-4">
        <div className="p-3 bg-stone-100 text-stone-800 rounded-xl"><UserCheck size={20} /></div>
        <div>
          <span className="text-[10px] uppercase text-stone-500 font-extrabold tracking-wider block mb-1">Загрузка мастеров</span>
          <span className="text-2xl font-sans font-bold tracking-tight tabular-nums text-stone-900">{analytics.masterWorkload}%</span>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCards;