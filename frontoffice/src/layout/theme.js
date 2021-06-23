import { createMuiTheme /*, responsiveFontSizes*/ } from '@material-ui/core/styles';

// Allow to use breakpoints
// const defaultTheme = createMuiTheme();

const white = '#FFFFFF';
const primary = '#EFBE74';
const secondary = '#323647';
const tertiary = '#F6F6F6';
const neutral_web_grey190 = '#201F1E';
const theme_1 = '#BF6C3A';
const theme_2 = '#E7AB99';
const theme_3 = '#30717A';
const theme_4 = '#9FC9AD';
const grey10 = '#FAF9F8';
const grey20 = '#F3F2F1';
const grey30 = '#E1DFDD';
const grey40 = '#828282';
const overlay_light = white +'66'; //40% in HEX
const overlay_dark = '#00000066'; /// black 40%
// const depth4_1 = white +'14'; //7,8% ~ 8% in HEX
// const depth4_2 = white +'1A'; //10,2% ~ 10% in HEX
// const depth8_1 = white +'21'; //12.9% ~ 13% in HEX
// const depth8_2 = depth4_2;
// const depth8_3 = white +'40'; //25% in HEX
// const depth16_1 = depth8_1;
// const depth16_2 = depth4_2;
// const depth64_1 = white +'38'; //21.9% ~ 22% in HEX
// const depth64_2 = white +'2E'; //18% in HEX
const font1 = '"Kaushan Script","serif"'; // serif in case of error;
const font2 = '"Montserrat", "Open Sans", "sans-serif"'; // Montserrat instead of Integral CF
const font3 = '"Poppins", "Open Sans", "sans-serif"'; // Poppins instead of Sofia Pro

let theme = createMuiTheme({
  palette: {
    primary: {
      // light:  primary,// to not be calculated from palette.primary.main
      main: primary,
      // dark: primary ,// to not be calculated from palette.primary.main
      contrastText: white ,// to not be calculated from palette.primary.main
    },
    secondary: {
      // light: secondary,// to not be calculated from palette.secondary.main
      main: secondary,
      // dark: secondary ,// to not be calculated from palette.secondary.main
      contrastText: white ,// to not be calculated from palette.secondary.main
    },
    tertiary: {
      // light: tertiary,// to not be calculated from palette.tertiary.main
      main: tertiary,
      // dark: tertiary ,// to not be calculated from palette.tertiary.main
      contrastText: secondary ,// to not be calculated from palette.tertiary.main
    },
    white: {
      // light: white,// to not be calculated from palette.white.main
      main: white,
      // dark: white ,// to not be calculated from palette.white.main
      contrastText: neutral_web_grey190 ,// to not be calculated from palette.white.main
    },
    theme_1: {
      // light: theme_1,// to not be calculated from palette.theme_1.main
      main: theme_1,
      // dark: theme_1 ,// to not be calculated from palette.theme_1.main
      contrastText: tertiary ,// to not be calculated from palette.theme_1.main
    },
    theme_2: {
      // light: theme_2,// to not be calculated from palette.theme_2.main
      main: theme_2,
      // dark: theme_2 ,// to not be calculated from palette.theme_2.main
      contrastText: tertiary ,// to not be calculated from palette.theme_2.main
    },
    theme_3: {
      // light: theme_3,// to not be calculated from palette.theme_3.main
      main: theme_3,
      // dark: theme_3 ,// to not be calculated from palette.theme_3.main
      contrastText: tertiary ,// to not be calculated from palette.theme_3.main
    },
    theme_4: {
      // light: theme_4,// to not be calculated from palette.theme_4.main
      main: theme_4,
      // dark: theme_4 ,// to not be calculated from palette.theme_4.main
      contrastText: tertiary ,// to not be calculated from palette.theme_4.main
    },
    grey10: {
      // light: grey10,// to not be calculated from palette.grey10.main
      main: grey10,
      // dark: grey10 ,// to not be calculated from palette.grey10.main
      contrastText: neutral_web_grey190 ,// to not be calculated from palette.grey10.main
    },
    grey20: {
      // light: grey20,// to not be calculated from palette.grey20.main
      main: grey20,
      // dark: grey20 ,// to not be calculated from palette.grey20.main
      contrastText: neutral_web_grey190 ,// to not be calculated from palette.grey20.main
    },
    grey30: {
      // light: grey30,// to not be calculated from palette.grey30.main
      main: grey30,
      // dark: grey30 ,// to not be calculated from palette.grey30.main
      contrastText: neutral_web_grey190 ,// to not be calculated from palette.grey30.main
    },
    grey40: {
      light: grey40,// to not be calculated from palette.grey40.main
      main: grey40,
      dark: grey40 ,// to not be calculated from palette.grey40.main
      contrastText: white ,// to not be calculated from palette.grey40.main
    },
    overlay_light: {
      // light: overlay_light,// to not be calculated from palette.overlay_light.main
      main: overlay_light,
      // dark: overlay_light ,// to not be calculated from palette.overlay_light.main
      contrastText: neutral_web_grey190 ,// to not be calculated from palette.overlay_light.main
    },
    overlay_dark: {
      // light: overlay_dark,// to not be calculated from palette.overlay_dark.main
      main: overlay_dark,
      // dark: overlay_dark ,// to not be calculated from palette.overlay_dark.main
      contrastText: white ,// to not be calculated from palette.overlay_dark.main
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
    },
    h2: {
      fontFamily: font1,
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '58px',
    },
    h3: {
      fontFamily: font2,
      fontSize: 28,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '34px',
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
      fontWeight: '600',
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: font2,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '14px',
      textTransform: 'uppercase',
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
      fontWeight: '600',
      lineHeight: '12px',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: font3,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    body2: {
      fontFamily: font3,
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
      lineHeight: '12px',
    },
    button1: {
      fontFamily: font3,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '12px',
      textTransform: 'uppercase',
    },
    button2: {
      fontFamily: font3,
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '20px',
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
        subtitle1: 'span',
        subtitle2: 'span',
        body1: 'span',
        body2: 'span',
      },
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        border: 1,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        borderRadius: 8,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
      },
      containedPrimary: {
        color: white,
        borderColor: white,
        backgroundColor: primary,
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: primary,
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
      containedSecondary: {
        color: white,
        borderColor: white,
        backgroundColor: secondary,
        '&:focus': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
        },
        '&:hover': {
          color: white,
          borderColor: white,
          backgroundColor: secondary,
        },
        '&:disabled': {
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
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
          color: grey40,
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
          color: grey40,
          borderColor: grey10,
          backgroundColor: grey10,
        },
      },
    },
    // TODO check if following if needed
    // RaChipField: {
    //   chip: {
    //     marginLeft: 0,
    //     marginTop: 0,
    //     marginRight: 8,
    //     marginBottom: 8
    //   }
    // },
    // RaShow: {
    //   card: {
    //     padding: 25,
    //     [defaultTheme.breakpoints.down('xs')]: {
    //       padding: 15
    //     }
    //   }
    // },
    // RaList: {
    //   content: {
    //     padding: 25,
    //     [defaultTheme.breakpoints.down('xs')]: {
    //       padding: 15
    //     }
    //   }
    // },
    // // Hide top actions bar in mobile for list pages
    // RaListToolbar: {
    //   toolbar: {
    //     [defaultTheme.breakpoints.down('xs')]: {
    //       height: 0,
    //       minHeight: 0
    //     }
    //   }
    // },
    // RaSingleFieldList: {
    //   root: {
    //     marginTop: 0,
    //     marginBottom: 0
    //   }
    // },
    // MuiTab: {
    //   labelIcon: {
    //     paddingTop: 0
    //   }
    // }
  }
});

// TODO check if useful and working
// can not be used with font definition
// theme = responsiveFontSizes(theme);

export default theme;
