/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark'],
  },
  theme: {
    extend: {
      animationDelay: {
        // increment in 50 upto 1000, in 100 up to 500, in 500 up to 1000, in 1000 up to 30000
        50: '50ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        250: '250ms',
        300: '300ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        500: '500ms',
        550: '550ms',
        600: '600ms',
        650: '650ms',
        700: '700ms',
        750: '750ms',
        800: '800ms',
        850: '850ms',
        900: '900ms',
        950: '950ms',
        1000: '1000ms',
        1100: '1100ms',
        1200: '1200ms',
        1300: '1300ms',
        1400: '1400ms',
        1500: '1500ms',
        1600: '1600ms',
        1700: '1700ms',
        1800: '1800ms',
        1900: '1900ms',
        2000: '2000ms',
        2100: '2100ms',
        2200: '2200ms',
        2300: '2300ms',
        2400: '2400ms',
        2500: '2500ms',
        2600: '2600ms',
        2700: '2700ms',
        2800: '2800ms',
        2900: '2900ms',
        3000: '3000ms',
        3100: '3100ms',
        3200: '3200ms',
        3300: '3300ms',
        3400: '3400ms',
        3500: '3500ms',
        3600: '3600ms',
        3700: '3700ms',
        3800: '3800ms',
        3900: '3900ms',
        4000: '4000ms',
        4100: '4100ms',
        4200: '4200ms',
        4300: '4300ms',
        4400: '4400ms',
        4500: '4500ms',
        4600: '4600ms',
        4700: '4700ms',
        4800: '4800ms',
        4900: '4900ms',
        5000: '5000ms',
        5100: '5100ms',
        5200: '5200ms',
        5300: '5300ms',
        5400: '5400ms',
        5500: '5500ms',
        5600: '5600ms',
        5700: '5700ms',
        5800: '5800ms',
        5900: '5900ms',
        6000: '6000ms',
        6100: '6100ms',
        6200: '6200ms',
        6300: '6300ms',
        6400: '6400ms',
        6500: '6500ms',
        6600: '6600ms',
        6700: '6700ms',
        6800: '6800ms',
        6900: '6900ms',
        7000: '7000ms',
        7100: '7100ms',
        7200: '7200ms',
        7300: '7300ms',
        7400: '7400ms',
        7500: '7500ms',
        7600: '7600ms',
        7700: '7700ms',
        7800: '7800ms',
        7900: '7900ms',
        8000: '8000ms',
        8100: '8100ms',
        8200: '8200ms',
        8300: '8300ms',
        8400: '8400ms',
        8500: '8500ms',
        8600: '8600ms',
        8700: '8700ms',
        8800: '8800ms',
        8900: '8900ms',
        9000: '9000ms',
        9100: '9100ms',
        9200: '9200ms',
        9300: '9300ms',
        9400: '9400ms',
        9500: '9500ms',
        9600: '9600ms',
        9700: '9700ms',
        9800: '9800ms',
        9900: '9900ms',
        10000: '10000ms',
        11000: '11000ms',
        12000: '12000ms',
        13000: '13000ms',
        14000: '14000ms',
        15000: '15000ms',
        16000: '16000ms',
        17000: '17000ms',
        18000: '18000ms',
        19000: '19000ms',
        20000: '20000ms',
        21000: '21000ms',
        22000: '22000ms',
        23000: '23000ms',
        24000: '24000ms',
        25000: '25000ms',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        heading: ['Rammetto', 'cursive'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacityValue('--tw-color-primary-50'),
          100: withOpacityValue('--tw-color-primary-100'),
          200: withOpacityValue('--tw-color-primary-200'),
          300: withOpacityValue('--tw-color-primary-300'),
          400: withOpacityValue('--tw-color-primary-400'),
          500: withOpacityValue('--tw-color-primary-500'),
          600: withOpacityValue('--tw-color-primary-600'),
          700: withOpacityValue('--tw-color-primary-700'),
          800: withOpacityValue('--tw-color-primary-800'),
          900: withOpacityValue('--tw-color-primary-900'),
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        'tracking-in-expand': {
          '0%': {
            letterSpacing: ' -0.5em',
            opacity: 0,
          },
          '40%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
          },
        },
        'tracking-in-contract': {
          '0%': {
            letterSpacing: ' 0.3em',
            opacity: 0,
          },
          '60%': {
            opacity: 0.4,
          },
          '100%': {
            opacity: 1,
          },
        },
        'fade-in': {
          '0%': {
            opacity: 1,
            transform: 'scale(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(100)',
          },
        },
        'scale-in-ver-center': {
          '0%': {
            transform: 'scaleY(0)',
            opacity: 0,
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: 1,
          },
        }, //@keyframes scale-in-bl{0%{transform:scale(0);transform-origin:0 100%;opacity:1}100%{transform:scale(1);transform-origin:0 100%;opacity:1}}
        'scale-in-bl': {
          '0%': {
            transform: 'scale(0)',
            transformOrigin: '0 100%',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: '0 100%',
            opacity: 1,
          },
        },
        // @keyframes slide-fwd-center{0%{transform:translateZ(0)}100%{transform:translateZ(160px)}}
        'slide-fwd-center': {
          '0%': {
            transform: 'translateZ(0)',
          },
          '100%': {
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'tracking-in-expand':
          'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'tracking-in-contract':
          'tracking-in-contract 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'fade-in': 'fade-in 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'scale-in-ver-center':
          'scale-in-ver-center 1.3s cubic-bezier(.86,0.000,.07,1.000) both',
        'scale-in-bl': 'scale-in-bl 2s cubic-bezier(.25,.46,.45,0.94) both',
        'slide-fwd-center':
          'slide-fwd-center .45s cubic-bezier(.25,.46,.45,.94) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animation-delay'),
    require('daisyui'),
    require('tailwindcss-all'),
  ],
};
