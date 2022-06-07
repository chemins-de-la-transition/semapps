import { createTheme } from '@material-ui/core/styles';
import theme from './theme';

let resourceTheme = createTheme({
  ...theme,
  typography: {
    ...theme.typography,
    h5: {
      ...theme.typography.h5,
      marginTop: 8,
      marginBottom: 8
    },
    body2: {
      ...theme.typography.body2,
      color: theme.palette.grey40.main,
    }
  },
  overrides: {
    ...theme.overrides,
    MuiChip: {
      ...theme.overrides.MuiChip,
      label: {
        fontWeight: 600
      }
    },
    MuiListItemText: {
      ...theme.overrides.MuiListItemText,
      primary: {
        fontWeight: 600
      }
    }
  }
})

export default resourceTheme;
