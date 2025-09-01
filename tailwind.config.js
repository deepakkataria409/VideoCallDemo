// 🧩 tailwind.config.js
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#4F46E5',
      ink: '#0F172A',
      muted: '#64748B',
      card: '#FFFFFF',
      bg: '#F6F7FB',
      success: '#16A34A',
      danger: '#DC2626',
    },
    borderRadius: {
      xl2: '1.25rem',
    },
    spacing: {
      xl: '1.25rem',
    },
  },
  plugins: [],
};
