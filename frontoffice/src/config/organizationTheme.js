import { createTheme } from '@material-ui/core/styles';
import theme from './theme';

const theme_5 = '#4C7788';
const theme_5_light = '#D1DBE0'

let organizationTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: theme_5,
    }
  }
})

export default organizationTheme;
