/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    shadows: {
      colored: {
        '--tw-shadow-colored': '0 5px var(--tw-shadow-color)',
      },
    },
    colors: {
      success: {
        50: "#f3faf8",
        100: "#d7f0ec",
        200: "#bfe7e1",
        300: "#7ecac1",
        400: "#53aea6",
        500: "#3a928d",
        600: "#2c7572",
        700: "#275e5c",
        800: "#234c4c",
        900: "#20413f",
        950: "#0e2425",
      },
      red: {
        50: "#fefbfb",
        100: "#fdf7f8",
        200: "#fbeaed",
        300: "#f8dde2",
        400: "#f6d0d7",
        500: "#f3c4cd",
        600: "#eeaab7",
        700: "#e88d9d",
        800: "#de5e75",
        900: "#bf2743",
      },
      warning: {
        50: "#fef5ee",
        100: "#fce9d8",
        200: "#f7ceb1",
        300: "#f2ab7e",
        400: "#ec804b",
        500: "#e75f28",
        600: "#d8471e",
        700: "#b4341a",
        800: "#8f2b1d",
        900: "#74261a",
        950: "#3e110c"
      },
      danger: {
        50: "#fdf5f3",
        100: "#fce8e4",
        200: "#fad5ce",
        300: "#f3ac9e",
        400: "#ed8f7c",
        500: "#e16a52",
        600: "#cd4e35",
        700: "#ac3f29",
        800: "#8f3625",
        900: "#773325",
        950: "#40170f"
      },
      green: {
        50: "#f8fbfc",
        100: "#f2f7f8",
        200: "#e1edef",
        300: "#d3e5e8",
        400: "#c6dde2",
        500: "#b7d4da",
        600: "#82b5bf",
        700: "#51919e",
        800: "#366068",
        900: "#366068",
      },
      lila: {
        50: "#fbfaff",
        100: "#f7f5ff",
        200: "#eae6fe",
        300: "#e2dcfe",
        400: "#d6cefd",
        500: "#c8befd",
        600: "#b4a6fc",
        700: "#a08dfb",
        800: "#836bfa",
        900: "#5534f9",
      },
      yellow: {
        50: "#fffdfa",
        100: "#fffaf5",
        200: "#fff5eb",
        300: "#feeedc",
        400: "#fee9d2",
        500: "#fee3c6",
        600: "#fdc991",
        700: "#fca446",
        800: "#ec7c04",
        900: "#aa5903",
      },
    },
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'marquee': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
      }
    },
  },
  plugins: [],
}

