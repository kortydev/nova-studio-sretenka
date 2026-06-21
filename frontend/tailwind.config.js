/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}", // Мы добавили этот путь, теперь Tailwind найдет ВСЕ новые классы!
  ],
  theme: {
    extend: {
      colors: {
        'sand-bg': '#F5F2EB',       // Теплый песочный тон (как травертин)
        'cream-light': '#FAF8F5',   // Мягкий алебастровый/льняной цвет
        'stone-dark': '#1E1D1C',    // Глубокий теплый антрацит
        'stone-muted': '#6B6865',   // Приглушенный серо-коричневый
        'divider': '#E6E2D8',       // Мягкие естественные границы стыков
        'bronze-accent': '#8C745C', // Благородный бронзовый для акцентов
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}