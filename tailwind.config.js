module.exports = {
  purge: [
    "./pages/**/*.vue", 
    "./components/**/*.vue", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  prefix: '',
  important: false,
  separator: ':',
  theme: {},
  variants: {},
  plugins: [],
  future: {
       removeDeprecatedGapUtilities: true,
       purgeLayersByDefault: true
  },
      
}