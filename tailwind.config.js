/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'kid-blue': 'rgb(17,0,124)',
            },
            fontFamily: {
                lilita: ['Lilita One']
            }

        },
    },
    plugins: [],
}

