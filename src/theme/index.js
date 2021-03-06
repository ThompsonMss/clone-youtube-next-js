import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
    primary: {
      main: '#F44336',
    },
    secondary: {
      main: '#3ea6ff',
    },
    text: {
      primary: '#263238',
      secondary: '#546e7a',
    },
  },
});

export default theme;
