/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        actMobile: '30px 1fr',
      },
      backgroundImage: {
        lideranca:
          "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/lideranca.jpg')",
        crescimento:
          'linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url("/assets/crescimento.jpg")',
        jornada:
          "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/jornada.jpg')",
        atualmente:
          "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/atualmente.jpg')",
        boom: "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/boom.jpg')",
        sucesso:
          "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('/assets/sucesso.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
