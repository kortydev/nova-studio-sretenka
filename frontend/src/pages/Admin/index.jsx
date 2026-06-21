import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, RefreshCw, Plus } from 'lucide-react';
import { supabase } from '../../supabase';

// Импортируем наши новые декомпозированные блоки
import AnalyticsCards from './AnalyticsCards';
import AdminFilters from './AdminFilters';
import AdminTable from './AdminTable';
import BookingForm from '../../components/BookingForm'; // Импортируем папку виджета (Vite сам загрузит index.jsx!)

function Admin() {
  const [bookings, setBookedTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Все');
  const [isManualBookingOpen, setIsManualBookingOpen] = useState(false);
  const navigate = useNavigate();

  const [analytics, setAnalytics] = useState({
    totalBookings: 0,
    retentionRate: 0,
    forecastedRevenue: 0,
    masterWorkload: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/login');
    } else {
      fetchBookings();

      // Живая подписка на изменения
      const channel = supabase
        .channel('realtime_bookings_changes_decomposed')
        .on(
          'postgres_changes', 
          { event: '*', schema: 'public', table: 'bookings' }, 
          () => {
            fetchBookings();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [navigate]);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('booking_date', { ascending: false })
      .order('booking_time', { ascending: true });

    if (error) {
      console.error("Ошибка загрузки записей:", error);
    } else if (data) {
      setBookedTimes(data);
      calculateAnalytics(data);
    }
    setLoading(false);
  };

  const calculateAnalytics = (data) => {
    const total = data.length;
    const activeBookings = data.filter(b => b.status !== 'Отменена');
    
    const revenue = activeBookings.reduce((sum, item) => sum + item.service_price, 0);

    const clientBookingsCount = {};
    data.forEach(booking => {
      const cleanPhone = booking.client_phone.replace(/\D/g, '');
      clientBookingsCount[cleanPhone] = (clientBookingsCount[cleanPhone] || 0) + 1;
    });

    const uniqueClients = Object.keys(clientBookingsCount).length;
    const returningClients = Object.values(clientBookingsCount).filter(count => count > 1).length;
    
    const retention = uniqueClients > 0 ? Math.round((returningClients / uniqueClients) * 100) : 0;

    const todayStr = new Date().toISOString().split('T')[0];
    const todayBookingsCount = activeBookings.filter(b => b.booking_date === todayStr).length;
    const workload = Math.round((todayBookingsCount / 21) * 100);

    setAnalytics({
      totalBookings: total,
      retentionRate: retention,
      forecastedRevenue: revenue,
      masterWorkload: Math.min(workload, 100)
    });
  };

  const handleUpdateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error("Ошибка обновления статуса:", error);
    } else {
      const updatedBookings = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
      setBookedTimes(updatedBookings);
      calculateAnalytics(updatedBookings);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.client_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.client_phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'Все' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 bg-stone-100 flex flex-col p-4 sm:p-6 md:p-12 overflow-y-auto relative">
      
      {/* Шапка админки */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-stone-200 pb-6 mb-8">
        <div>
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-stone-500 block mb-1 font-semibold">
            Dashboard
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase text-stone-900 leading-tight">Кабинет администратора</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button 
            onClick={() => setIsManualBookingOpen(true)}
            className="flex-1 sm:flex-initial px-4 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-all font-sans text-[10px] sm:text-xs tracking-widest uppercase font-bold rounded-xl flex items-center justify-center space-x-1.5"
          >
            <Plus size={14} />
            <span>Добавить запись</span>
          </button>
          
          <button 
            onClick={fetchBookings} 
            className="p-2.5 bg-white text-stone-950 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors"
            title="Обновить данные"
          >
            <RefreshCw size={16} />
          </button>
          
          <button 
            onClick={handleLogout}
            className="p-2.5 bg-white text-stone-700 border border-stone-200 rounded-xl hover:bg-red-700 hover:text-white transition-all flex items-center justify-center"
            title="Выйти"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* Блок аналитики */}
      <AnalyticsCards analytics={analytics} />

      {/* Фильтры и поиск */}
      <AdminFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Таблица записей */}
      <AdminTable 
        bookings={bookings}
        loading={loading}
        filteredBookings={filteredBookings}
        handleUpdateStatus={handleUpdateStatus}
      />

      {isManualBookingOpen && (
        <BookingForm onClose={() => setIsManualBookingOpen(false)} />
      )}

    </div>
  );
}

export default Admin;