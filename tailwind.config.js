/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(236,72,153,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(236,72,153,0.8)' },
        }
      },
      colors: {
        'nurse-pink': '#ec4899',
        'nurse-red': '#ef4444',
        'nurse-blue': '#3b82f6',
        'nurse-soft': '#fce4ec',
      }
    },
  },
  plugins: [],
}