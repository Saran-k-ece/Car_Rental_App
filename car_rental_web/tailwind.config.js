export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        extra: '0.15em',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
