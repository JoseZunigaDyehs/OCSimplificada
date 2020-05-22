import { createMuiTheme } from '@material-ui/core/styles'

const fontWeights = [300, 400, 500, 700]
const inputHeight = `3.6rem`

export const colors = {
  primary: { main: `#2E5BFF` },
  secondary: { main: `#2E384D` },
  terniary: { main: `#8798AD` },
  error: { main: `#D63649` },
  success: { main: `#328A0E` },
}
const fontSizes = [
  13, //0
  14, //1
  16, //2
  20, //3
  22, //4
  28, //5
  36, //6
]
const familyRoboto = [`Roboto`, `sans-serif`].join(`,`)
const familyRobotoSlab = [`Roboto Slab`, `Roboto`].join(`,`)

const theme = createMuiTheme({
  palette: {
    ...colors,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: fontSizes[1],
    fontFamily: familyRoboto,
    h1: {
      fontSize: fontSizes[5],
      fontWeight: fontWeights[2],
      lineHeight: `2.6rem`,
      letterSpacing: -0.21,
    },
    subtitle1: {
      fontSize: fontSizes[0],
    },
    body1: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      lineHeight: `2rem`,
      fontFamily: familyRoboto,
      color: colors.secondary.main,
    },
    caption: {
      fontWeight: fontWeights[1],
      lineHeight: `1.8rem`,
      fontFamily: familyRoboto,
      color: colors.primary.main,
    },
  },
})
theme.overrides = {
  MuiButton: {
    root: {
      color: `white`,
      backgroundColor: colors.secondary.main,
      minWidth: 50,
      minHeight: 50,
      borderRadius: `4px`,
      textTransform: `none`,
      fontWeight: fontWeights[3],
      fontSize: `16px`,
      letterSpacing: `0.6px`,
      '&:hover': {
        textDecoration: `underline`,
        backgroundColor: `${colors.secondary.main}`,
        color: `white`,
        '&:disabled': {
          textDecoration: `none`,
          backgroundColor: colors.terniary,
        },
      },
      '&:disabled': {
        cursor: `not-allowed`,
        pointerEvents: `auto`,
        color: `white`,
        opacity: 0.5,
        backgroundColor: colors.terniary,
      },
    },
    text: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    contained: {
      backgroundColor: colors.secondary.dark,
      color: colors.primary.main,
      '&:hover': {
        textDecoration: `underline`,
        backgroundColor: `${colors.secondary.main}`,
        color: `white`,
        '&:disabled': {
          textDecoration: `none`,
          backgroundColor: colors.terniary,
        },
      },
    },
    disabled: {
      opacity: 0.5,
    },
  },
  MuiSvgIcon: {
    root: {
      width: `2rem`,
      height: `2rem`,
    },
    colorPrimary: {
      color: colors.terniary.main,
    },
  },
  MuiAlert: {
    root: {
      maxWidth: `330px`,
    },
    message: {
      fontSize: fontSizes[0],
      lineHeight: `20px`,
      fontWeight: fontWeights[0],
    },
  },
}
export default theme
