import { createTheme } from '@material-ui/core/styles';
import theme from './resourceTheme';

const theme_5 = '#4C7788';

let organizationTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: theme_5,
    }
  },
  overrides: {
    ...theme.overrides,
    MuiButton: {
      ...theme.overrides.MuiButton,
      containedPrimary: {
        ...theme.overrides.MuiButton.containedPrimary,
        backgroundColor: theme.palette.theme_5.main,
        '&:focus': {
          backgroundColor: theme.palette.theme_5.main,
        },
        '&:hover': {
          backgroundColor: theme.palette.theme_5.main,
        },
      },
    },
  },
})

export default organizationTheme;
