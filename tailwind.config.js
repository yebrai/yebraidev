module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Asegúrate de que cubra todos los archivos que usan clases de Tailwind
    "./pages/**/*.{js,ts,jsx,tsx}", // Incluye las páginas si las tienes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};