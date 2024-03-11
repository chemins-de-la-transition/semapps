import { createTheme } from '@material-ui/core/styles';

// Allow to use breakpoints
const defaultTheme = createTheme();
const smallScreenTreshold = 'xs';

const white = '#FFFFFF';
const primary = '#87B6D5'; //light blue / CDLT=#D4A24C 
const secondary = '#006DAD'; // dark blue / CDLT=#203142
const tertiary = '#FFFFFF'; //CDLT=F6F6F6
const neutral_web_grey190 = '#201F1E';
const theme_1 = '#D33217'; //CDLT=#8D3431
const theme_2 = '#D33217'; //CDLT=#9B471F
const theme_3 = '#D33217'; //CDLT=#88534D
const theme_4 = '#D33217'; //CDLT=#897171
const theme_5 = '#D33217'; //CDLT=#4C7788
const theme_6 = '#D33217'; //CDLT=#1E5544
const theme_7 = '#D33217'; //CDLT=#069782
const theme_8 = '#D33217'; //CDLT=#AEBDA5
const grey10 = '#FAF9F8';
const grey20 = '#F3F2F1';
const grey30 = '#E1DFDD';
const grey40 = '#999999'; //CDLT=#828282
const overlay_light = white + '66'; //40% in HEX
const overlay_dark = '#00000066'; /// black 40%
const font1 = '"Lato","sans-serif"'; //CDLT=Kaushan Script,serif
const font2 = '"Lato", "Open Sans", "sans-serif"'; //CDLT=Roboto
const font3 = '"Lato", "Open Sans", "sans-serif"'; //CDLT=Poppins

let theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: white, // to not be calculated from palette.primary.main
    },
    secondary: {
      main: secondary,
      contrastText: white, // to not be calculated from palette.secondary.main
    },
    tertiary: {
      main: tertiary,
      contrastText: secondary, // to not be calculated from palette.tertiary.main
    },
    white: {
      main: white,
      contrastText: neutral_web_grey190, // to not be calculated from palette.white.main
    },
    theme_1: {
      main: theme_1,
      contrastText: tertiary, // to not be calculated from palette.theme_1.main
    },
    theme_2: {
      main: theme_2,
      contrastText: tertiary, // to not be calculated from palette.theme_2.main
    },
    theme_3: {
      main: theme_3,
      contrastText: tertiary, // to not be calculated from palette.theme_3.main
    },
    theme_4: {
      main: theme_4,
      contrastText: tertiary, // to not be calculated from palette.theme_4.main
    },
    theme_5: {
      main: theme_5,
      contrastText: tertiary
    },
    theme_6: {
      main: theme_6,
      contrastText: tertiary
    },
    theme_7: {
      main: theme_7,
      contrastText: tertiary
    },
    theme_8: {
      main: theme_8,
      contrastText: tertiary
    },
    grey10: {
      main: grey10,
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey10.main
    },
    grey20: {
      main: grey20,
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey20.main
    },
    grey30: {
      main: grey30,
      contrastText: neutral_web_grey190, // to not be calculated from palette.grey30.main
    },
    grey40: {
      light: grey40, // to not be calculated from palette.grey40.main
      main: grey40,
      dark: grey40, // to not be calculated from palette.grey40.main
      contrastText: white, // to not be calculated from palette.grey40.main
    },
    overlay_light: {
      main: overlay_light,
      contrastText: neutral_web_grey190, // to not be calculated from palette.overlay_light.main
    },
    overlay_dark: {
      main: overlay_dark,
      contrastText: white, // to not be calculated from palette.overlay_dark.main
    },
  },
  typography: {
    fontFamily: font3,
    fontSize: 14,
    h1: {
      fontFamily: font1,
      fontSize: 48,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '70px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 32,
        lineHeight: '46px',
      },
    },
    h2: {
      fontFamily: font1,
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '58px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 28,
        lineHeight: '41px',
      },
    },
    h3: {
      fontFamily: font2,
      fontSize: 28,
      fontStyle: 'normal',
      fontWeight: '900',
      lineHeight: '33px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 20,
        lineHeight: '23px',
      },
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: font1,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '23px',
    },
    h5: {
      fontFamily: font2,
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '900',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: font1,
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '44px',
      [defaultTheme.breakpoints.down(smallScreenTreshold)]: {
        fontSize: 18,
        lineHeight: '26px',
      },
    },
    subtitle1: {
      fontFamily: font3,
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontFamily: font3,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: font2,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '19px',
    },
    body2: {
      fontFamily: font2,
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    body3: {
      fontFamily: font3,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '14px',
    },
    button: {
      fontFamily: font3,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h3',
        h3: 'h4',
        h4: 'h5',
        h5: 'h6',
        h6: 'h6',
        subtitle1: 'p',
        subtitle2: 'p',
        body1: 'p',
        body2: 'p',
        button: 'span',
      },
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        border: 1,
        color: 'white !important',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        borderRadius: 8,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        boxShadow: '7px 7px ' + white,
      },
      containedPrimary: {
        color: white,
        borderColor: white,
        boxShadow: '7px 7px ' + white,
        backgroundColor: primary,
        position: 'relative',
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
          boxShadow: 'none',
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
          boxShadow: 'none',
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: primary,
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        color: white,
        borderColor: white,
        boxShadow: '7px 7px ' + white,
        backgroundColor: secondary,
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
          boxShadow: 'none',
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
          boxShadow: 'none',
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: secondary,
          boxShadow: 'none',
        },
      },
      outlined: {
        border: 1,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        borderRadius: 8,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
      },
      outlinedPrimary: {
        color: white,
        borderColor: white,
        '&:focus': {
          color: primary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:hover': {
          color: primary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:disabled': {
          color: primary,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
      outlinedSecondary: {
        color: white,
        borderColor: white,
        '&:focus': {
          color: secondary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:hover': {
          color: secondary,
          borderColor: white,
          backgroundColor: white,
        },
        '&:disabled': {
          color: secondary,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
    },
  },
});

export default theme;
