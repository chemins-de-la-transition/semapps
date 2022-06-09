import { createTheme } from '@material-ui/core/styles';
import theme from './resourceTheme';

let personTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: theme.palette.theme_2.main,
    }
  },
  overrides: {
    ...theme.overrides,
    MuiButton: {
      ...theme.overrides.MuiButton,
      containedPrimary: {
        ...theme.overrides.MuiButton.containedPrimary,
        backgroundColor: theme.palette.theme_2.main,
        '&:focus': {
          backgroundColor: theme.palette.theme_2.main,
        },
        '&:hover': {
          backgroundColor: theme.palette.theme_2.main,
        },
      },
    },
  },
})

export default personTheme;
