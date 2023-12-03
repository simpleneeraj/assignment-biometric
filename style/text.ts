import { StyleSheet, TextStyle } from 'react-native';

type Colors = {
  [color: string]: string;
};

const colors: Colors = {
  b: '#0070c9',
  g: '#8e8e93',
  lg: '#aaaaaa',
  llg: '#dddddd',
  lllg: '#eeeeee',
  o: '#ff9500',
  p: '#5856d6',
  pi: '#ff375f',
  pk: '#ff2d55',
  r: '#ff3b30',
  y: '#ffcc00',
  lg2: '#c7c7cc',
  lg3: '#d1d1d6',
  lg4: '#5ac8fa',
  lg5: '#34c759',
  lg6: '#ffd21e',
  lg7: '#ff9f0a',
  lg8: '#ff453a',
};

const generateTextStyles = (
  fontSize: number,
  fontWeight: 'normal' | 'bold',
  color: string
): TextStyle => ({
  fontSize,
  fontWeight,
  color,
});

const textStyles = StyleSheet.create({
  xs: generateTextStyles(12, 'normal', colors.g),
  sm: generateTextStyles(14, 'normal', colors.g),
  base: generateTextStyles(16, 'normal', colors.g),
  lg: generateTextStyles(18, 'bold', colors.lg),
  xl: generateTextStyles(20, 'bold', colors.llg),
  '2xl': generateTextStyles(24, 'bold', colors.lg),
  '3xl': generateTextStyles(28, 'bold', colors.lllg),
  '4xl': generateTextStyles(32, 'bold', colors.lg),
  '5xl': generateTextStyles(36, 'bold', colors.lllg),
  '6xl': generateTextStyles(40, 'bold', colors.lg),
  '7xl': generateTextStyles(44, 'bold', colors.lllg),
  '8xl': generateTextStyles(48, 'bold', colors.lg),
  '9xl': generateTextStyles(52, 'bold', colors.lllg),
  heading: generateTextStyles(24, 'bold', colors.b),
  subheading: generateTextStyles(18, 'bold', colors.p),
  caption: generateTextStyles(14, 'normal', colors.g),
  error: generateTextStyles(16, 'normal', colors.r),
  success: generateTextStyles(16, 'normal', colors.lg5),
  primary: generateTextStyles(16, 'normal', colors.b),
  secondary: generateTextStyles(16, 'normal', colors.o),
});

export default textStyles;
