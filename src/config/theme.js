import { createMuiTheme } from '@material-ui/core/styles'

const fontWeights = [300, 400, 500, 700]
const inputHeight = `4rem`
export const colors = {
  primary: {
    main: `#0064FF`,
    dark: '#004EC6',
    light: '#CDDFFC',
  },
  secondary: {
    main: '#69707F',
    dark: `#2E384D`,
    light: '#8798AD',
  },
  terniary: {
    main: '#F4F6FC',
    dark: `#BFC5D2`,
    light: '#FFFFFF',
  },
  error: { main: `#D63649` },
  success: { main: `#33AC2E` },
  warning: { main: '#F7C137' },
  info: { main: '#17A2B8' },
}
const fontSizes = [
  12, //0
  14, //1
  16, //2
  18, //3
  22, //4
  27, //5
  34, //6
  48, //7
]
const familyRoboto = [`Roboto`, `sans-serif`].join(`,`)
//const familyRobotoSlab = [`Roboto Slab`, `Roboto`].join(`,`)

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
  fontWeights,
  fontSizes,
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: fontSizes[1],
    fontFamily: familyRoboto,
    h1: {
      fontSize: fontSizes[6],
      fontWeight: fontWeights[2],
      lineHeight: `3.8rem`,
      letterSpacing: -0.21,
    },
    h2: {
      fontSize: fontSizes[5],
      fontWeight: fontWeights[2],
      lineHeight: `3.1rem`,
      letterSpacing: -0.21,
    },
    h3: {
      fontSize: fontSizes[4],
      fontWeight: fontWeights[2],
      lineHeight: `2.6rem`,
      letterSpacing: -0.21,
    },
    h4: {
      fontSize: fontSizes[3],
      fontWeight: fontWeights[2],
      lineHeight: `2.2rem`,
      letterSpacing: -0.21,
    },
    body1: {
      fontSize: fontSizes[2],
      fontWeight: fontWeights[1],
      lineHeight: `2rem`,
      fontFamily: familyRoboto,
      color: colors.secondary.dark,
    },
    body2: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      lineHeight: `1.8rem`,
      fontFamily: familyRoboto,
      color: colors.secondary.dark,
    },
    subtitle1: {
      fontSize: fontSizes[0],
      lineHeight: '1.6rem',
      color: colors.secondary.light,
    },
    caption: {
      fontWeight: fontWeights[1],
      lineHeight: `1.8rem`,
      fontFamily: familyRoboto,
      color: colors.secondary.main,
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontWeight: fontWeights[1],
      lineHeight: `1.8rem`,
      fontFamily: familyRoboto,
      color: colors.secondary.light,
      textTransform: 'uppercase',
    },
  },
})
theme.overrides = {
  MuiInput: {
    root: {
      height: inputHeight,
    },
    input: {
      '&::placeholder': {
        color: colors.secondary.light,
      },
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: ' 0 .8rem',
      '&::placeholder': {
        color: colors.secondary.light,
        opacity: 1,
      },
    },
    notchedOutline: {
      borderWidth: '0px !important',
    },
  },
  MuiInputBase: {
    root: {
      width: '100%',
      minHeight: inputHeight,
    },
    disabled: {
      background: '#F4F7FF',
      color: colors.secondary.light,
      opacity: 1,
    },
    input: {
      height: 'auto',
      color: colors.secondary.dark,
    },
  },
  MuiSelect: {
    select: {
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      color: 'transparent',
    },
  },
  MuiButton: {
    root: {
      color: `white`,
      minWidth: 200,
      minHeight: 40,
      textTransform: `none`,
      fontWeight: fontWeights[1],
      fontSize: fontSizes[2],
      borderRadius: '2rem',
      '&:hover': {
        '&:disabled': {
          backgroundColor: '#D5D7DB',
          color: 'white',
        },
      },
      '&:disabled': {
        cursor: `not-allowed`,
        pointerEvents: `auto`,
        backgroundColor: '#D5D7DB',
        color: 'white',
        border: 'none !important',
      },
    },
    text: {
      backgroundColor: `transparent`,
      color: colors.secondary.light,
      minWidth: 'auto',
      '&:hover': {
        backgroundColor: `transparent !important`,
        textDecoration: `underline`,
      },
    },
    contained: {
      backgroundColor: colors.secondary.light,
      color: 'white',
      '&:hover': {
        backgroundColor: `${colors.secondary.main}`,
        color: `white`,
        '&:disabled': {
          backgroundColor: '#D5D7DB',
          color: 'white',
        },
      },
      '&:disabled': {
        backgroundColor: '#D5D7DB',
        color: 'white',
      },
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
