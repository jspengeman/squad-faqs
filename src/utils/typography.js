import Typography from 'typography'

const theme = { 
  baseFontSize: '18px',
  baseLineHeight: 1.61,
  headerFontFamily: [ 'Roboto', 'sans-serif' ],
  bodyFontFamily: [ 'Roboto', 'sans-serif' ],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
  googleFonts: [ { name: 'Roboto', styles: [ '400', '700' ] } ],
  scaleRatio: 1.618,
  headerColor: '#FFC40B',
  bodyColor: '#FFFFFF' 
}

const typography = new Typography(theme)

export default typography