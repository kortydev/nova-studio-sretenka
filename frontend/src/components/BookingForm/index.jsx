import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../../supabase'; // Исправлен путь: поднялись на 2 уровня вверх к src

// Импортируем наши шаги напрямую из текущей папки (убрали лишнюю приставку ./BookingForm/)
import ServiceStep from './ServiceStep';
import MasterStep from './MasterStep';
import DateTimeStep from './DateTimeStep';
import ClientStep from './ClientStep';
import SuccessStep from './SuccessStep';

const SERVICES = [
  { id: '1', name: 'Женская стрижка (Vidal Sassoon)', price: 3500, duration: '60 мин' },
  { id: '2', name: 'Сложное окрашивание (Airtouch/Balayage)', price: 8500, duration: '180 мин' },
  { id: '3', name: 'Люкс-уход для волос (Tokio Inkarami)', price: 5000, duration: '60 мин' },
  { id: '4', name: 'Маникюр + Покрытие (Luxio)', price: 2500, duration: '90 мин' }
];

const MASTERS = [
    { 
      id: 'elena', 
      name: 'Елена Морозова', 
      role: 'Топ-стилист (опыт 9 лет)',
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    { 
      id: 'alex', 
      name: 'Александр Власов', 
      role: 'Ведущий колорист (опыт 8 лет)',
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    { 
      id: 'anna', 
      name: 'Анна Демидова', 
      role: 'Нейл-мастер (опыт 6 лет)',
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

const TIME_SLOTS = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

function BookingForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedTimes, setBookedTimes] = useState([]);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const getNext14Days = () => {
    const days = [];
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push({
        isoString: d.toISOString().split('T')[0],
        formatted: d.toLocaleDateString('ru-RU', options)
      });
    }
    return days;
  };

  const daysList = getNext14Days();

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const cleanInput = input.replace(/\D/g, ''); 
    
    let formattedPhone = '';
    if (cleanInput.length > 0) {
      formattedPhone = '+7';
      if (cleanInput.length > 1) {
        formattedPhone += ' (' + cleanInput.substring(1, 4);
      }
      if (cleanInput.length > 4) {
        formattedPhone += ') ' + cleanInput.substring(4, 7);
      }
      if (cleanInput.length > 7) {
        formattedPhone += '-' + cleanInput.substring(7, 9);
      }
      if (cleanInput.length > 9) {
        formattedPhone += '-' + cleanInput.substring(9, 11);
      }
    }
    setPhone(formattedPhone);
  };

  useEffect(() => {
    if (selectedDate && selectedMaster) {
      const fetchBookedSlots = async () => {
        const { data, error } = await supabase
          .from('bookings')
          .select('booking_time')
          .eq('booking_date', selectedDate)
          .eq('master_id', selectedMaster.id)
          .neq('status', 'Отменена');

        if (error) {
          console.error("Ошибка загрузки слотов:", error);
        } else if (data) {
          setBookedTimes(data.map(item => item.booking_time));
        }
      };

      fetchBookedSlots();
    }
  }, [selectedDate, selectedMaster]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length < 11) {
      setError('Введите полный номер телефона.');
      return;
    }

    if (/^(\d)\1+$/.test(cleanPhone.substring(1))) {
      setError('Пожалуйста, укажите настоящий номер телефона.');
      return;
    }

    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('bookings')
        .insert([{
          client_name: name,
          client_phone: phone,
          service_id: selectedService.id,
          service_name: selectedService.name,
          service_price: selectedService.price,
          master_id: selectedMaster.id,
          master_name: selectedMaster.name,
          booking_date: selectedDate,
          booking_time: selectedTime,
          status: 'Новая'
        }]);

      if (dbError) throw dbError;
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Не удалось оформить запись. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <SuccessStep 
        name={name}
        selectedTime={selectedTime}
        selectedDate={selectedDate}
        daysList={daysList}
        selectedMaster={selectedMaster}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="bg-stone-100 w-full max-w-xl rounded-t-xl sm:rounded-xl shadow-2xl relative z-10 overflow-hidden border border-stone-200 flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <span className="font-sans text-xs tracking-widest uppercase text-stone-500 font-bold">
            Шаг {step} из 4 // Онлайн-запись
          </span>
          <button onClick={onClose} className="text-stone-900 p-1 hover:text-stone-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm font-medium">
              {error}
            </div>
          )}

          {step === 1 && (
            <ServiceStep 
              services={SERVICES}
              selectedService={selectedService}
              onSelectService={(service) => {
                setSelectedService(service);
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <MasterStep 
              masters={MASTERS}
              selectedMaster={selectedMaster}
              onSelectMaster={(master) => {
                setSelectedMaster(master);
                setStep(3);
              }}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <DateTimeStep 
              daysList={daysList}
              selectedDate={selectedDate}
              onSelectDate={(date) => {
                setSelectedDate(date);
                setSelectedTime('');
              }}
              timeSlots={TIME_SLOTS}
              bookedTimes={bookedTimes}
              selectedTime={selectedTime}
              onSelectTime={(time) => {
                setSelectedTime(time);
                setStep(4);
              }}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <ClientStep 
              selectedService={selectedService}
              selectedMaster={selectedMaster}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              daysList={daysList}
              name={name}
              onChangeName={(e) => setName(e.target.value)}
              phone={phone}
              onChangePhone={handlePhoneChange}
              onSubmit={handleBookingSubmit}
              isSubmitting={isSubmitting}
              onBack={() => setStep(3)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;