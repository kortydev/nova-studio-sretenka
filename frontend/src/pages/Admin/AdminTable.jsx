import React from 'react';

function AdminTable({ bookings, loading, filteredBookings, handleUpdateStatus }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
      {loading ? (
        <div className="p-16 text-center text-stone-500 font-semibold text-xs sm:text-sm">Загрузка данных из Supabase...</div>
      ) : filteredBookings.length === 0 ? (
        <div className="p-16 text-center text-stone-500 font-semibold text-xs sm:text-sm">Записей не обнаружено.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs sm:text-sm">
            <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-[10px] font-extrabold border-b border-stone-200">
              <tr>
                <th className="px-6 py-4">Клиент</th>
                <th className="px-6 py-4">Процедура</th>
                <th className="px-6 py-4">Мастер</th>
                <th className="px-6 py-4">Дата / Время</th>
                <th className="px-6 py-4">Статус</th>
                <th className="px-6 py-4 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredBookings.map(item => (
                <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-stone-900">{item.client_name}</div>
                    <div className="text-[10px] text-stone-500 font-mono mt-0.5">{item.client_phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-stone-900">{item.service_name}</div>
                    <div className="text-stone-500 mt-0.5">{item.service_price} ₽</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-stone-900">{item.master_name}</td>
                  <td className="px-6 py-4 text-stone-900">
                    <span className="font-bold">{new Date(item.booking_date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</span>, в {item.booking_time}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-stone-50 ${
                      item.status === 'Новая' ? 'bg-amber-800' :
                      item.status === 'Подтверждена' ? 'bg-emerald-800' :
                      'bg-rose-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item.status === 'Новая' && (
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'Подтверждена')}
                          className="px-2.5 py-1 bg-stone-900 text-stone-50 font-bold hover:bg-stone-700 rounded-lg text-[10px] sm:text-xs"
                        >
                          Да
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'Отменена')}
                          className="px-2.5 py-1 border border-stone-300 text-stone-700 font-bold hover:bg-red-700 hover:text-white rounded-lg text-[10px] sm:text-xs"
                        >
                          Нет
                        </button>
                      </div>
                    )}
                    {item.status !== 'Новая' && (
                      <span className="text-stone-400 font-semibold italic text-xs">Завершено</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminTable;