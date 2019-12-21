// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.vue',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    ...process.env.NODE_ENV === 'production'
    ? [purgecss]
    : []
  ]
}