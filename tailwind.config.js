module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        navBar: '280px'
      },
      height: {
        topBar: '60px',
        nowPlayingBar: '72px'
      },
      colors: {
        primary: '#1db954',
        sliderRail: '#535353',
        sliderTrack: '#b3b3b3',
        baseline: 'rgb(var(--background-base) / <alpha-value>)',
        white: 'rgb(var(--text-base) / <alpha-value>)',
        highlight: 'hsla(0,0%,100%,.1)',
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: []
};
