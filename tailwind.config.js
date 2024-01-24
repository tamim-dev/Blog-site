/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Hel: "'Helvetica', sans-serif",
            },
            spacing: {
                container: "1230px",
            },
            colors: {
                LIGHTBLUE: "#40A2D8",
                LIGHTYELLOW: "#FFCD3C",
                MILDYELLOW: "#F8E559",
                OFFWHITE: "#FFFFEC",
            },
            screens: {
                smd: "350px",
            },
        },
    },
    plugins: [],
};
