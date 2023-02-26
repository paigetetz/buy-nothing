/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1F3B4D",
                secondary: "#D0FEFE",
                tertiary: "#017374",
            },
            backgroundImage: {
                'parallex1': "url('./assets/robert-lukeman-_RBcxo9AU-U-unsplash.jpg')",
            }
        },
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: [],
}
