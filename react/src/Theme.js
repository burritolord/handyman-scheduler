import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[800],
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
    maxWidth: 960,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Theme;
