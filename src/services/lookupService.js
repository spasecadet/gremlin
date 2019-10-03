
// hash of brand colors.  Would ideally map this with CSS, looks like css-in-js might be a good option.
const brandColors = {
  primary: '#1D2233',
  secondary: '#83276E',
  tertiary: '#D72A7C',
  quaternary: '#EDD132',
}

// array of brand color keys eg: [primary, secondar, etc];
const brandColorKeys = Object.keys(brandColors);

export { brandColors, brandColorKeys };
