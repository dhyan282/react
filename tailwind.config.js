/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/asana.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'rose-pink' : '#eeebea!important',
        'purple' : '  #796EFF',
        'green-dark': '#285B52',
        'light-pink': '#EEEBEA',
      },
      margin :{
        '22': '-282px', 
        '40': '27px',
        '26': '26px',
        '83':'-67px',
        '170': '-170px',
        '122':'122px',
        '107': '-182px',
        '116':'116px',
        '120':'120px',
        
      },
      width:{
        '20' : '1271px',
        '200': '200rem',
        '125':'140%',
        
      },
      height:{
        '80': '80vh',
        '79':'79%',
        '37': '37rem',
      },
      borderWidth:{
        '1': '1px',
      },
      top:{
        '57': '57px',
      },
      backgroundImage:{
        'tab-img': "url('https://assets.asana.biz/transform/63685835-0033-48c5-89ce-a606a09ce27c/homepage-hero-greybg-en-3x')"
      },

    },
  },
  plugins: [],
}
