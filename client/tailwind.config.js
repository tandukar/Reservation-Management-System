/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                '30': '23rem',
                '85': '27rem',
                '128': '33rem',
                '150': '48rem',
                '200': '69rem',
                '250': '100rem',
            },
            height: {
                '329': '25rem',
                '150': '48rem',
            },
            colors: {
                // Configure your color palette here
                'custom-green': '#66bb6a',
                'custom-blue': '#2265CA',
                'custom-blue1': '#628CEA',
                // 'custom-blue1': '#2684fc',
                // 'custom-blue1': '#4876db',

            },
        },
    },
    plugins: [],
}