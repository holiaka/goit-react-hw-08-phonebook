// Import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
// import { components } from './globalStyle';

// Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  config,
};

// Extend the theme
const theme = extendTheme({ overrides });

export default theme;

// My parameters for React elements

// export const option = {
  
//   bgColor: useColorModeValue('white', 'gray.800'),
//   textColor: useColorModeValue('gray.800', 'white')
// };
