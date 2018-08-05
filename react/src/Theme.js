import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#054963',
    },
    secondary: {
      main: '#023245',
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: '#5A5A5A',
      },
    },
  },
  appWidth: {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Theme;
