
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // LMS specific colors - updated with new colors
        maroon: '#750d1f',
        'dark-maroon': '#5a0a18',
        'light-maroon': '#8f1026',
        green: '#125b48',
        'dark-green': '#0e4637',
        'light-green': '#1a7d63',
        'header-gray': '#d9d9d9',
        'light-gray': '#f3f3f3',
        'medium-gray': '#D3D3D3',
        'light-pink': '#FFB6C1',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'scale-out': 'scale-out 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-out-left': 'slide-out-left 0.3s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
        'slide-in-top': 'slide-in-top 0.3s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'enter': 'fade-in 0.3s ease-out, scale-in 0.2s ease-out',
        'exit': 'fade-out 0.3s ease-out, scale-out 0.2s ease-out'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'float': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
