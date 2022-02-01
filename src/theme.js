import { createTheme } from '@material-ui/core/styles';

export const themeLight = createTheme({
  palette: {
    type: 'light',
    tab: {
      main: '#ffffff'
    },
    primary: {
      main: '#455a64',
    },
    secondary: {
      main: '#fbeee4',
    },
    info: {
      main: '#0e4677',
      light: '#CFE9FF',
    },
    action: {
      active: '#c76a24',
    },
    text: {
      primary: '#000',
      secondary: '#0e4677',
    },
    search: {
      primary: '#fff'
    }
  },

});
