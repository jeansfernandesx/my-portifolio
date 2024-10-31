import { createTheme } from "@mui/material";
import {  responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography: {
        fontFamily:"Helvetica Nueu"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;