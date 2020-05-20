import { createMuiTheme } from '@material-ui/core/styles'

const fontWeights = [300, 400, 500, 700]

const inputHeight = `3.6rem`

export const colors = {
  primary: { main: `#29323E`, light: `#E8EBF0`, dark: `#001C37` },
  secondary: { main: `#024176`, light: `#0083e9`, dark: `#B2D9F8` },
  terniary: { main: `#0083e9`, light: `#E5F2FC`, dark: `#CCD9E4` },
  grayRgba: [
    `rgba(224, 224, 224, 1)`, // 0
    `rgba(0, 111, 179, 0.08)`, // 1
    `rgba(80,227,194,0)`, // 2
    `rgba(0, 0, 0, 0.08)`, //3
    `rgba(0, 0, 0, 0.12)`, //4
    `rgba(0, 0, 0, 0.14)`, //5
    `rgba(0, 0, 0, 0.26)`, //6
    `rgba(0, 0, 0, 0.38)`, //7
    `rgba(0,0,0,0.50)`, //8
    `rgba(0, 0, 0, 0.54)`, //9
  ],
  gray: [`#F6F7FB`, `#D8D8D8`, `#979797`],
  error: { main: `#E02020` },
  success: { main: `#328A0E` },
}
const fontSizes = [
  14, //0
  16, //1
  20, //2
  22, //3
  28, //4
  36, //5
]
const familyRoboto = [`Roboto`, `sans-serif`].join(`,`)
const familyRobotoSlab = [`Roboto Slab`, `Roboto`].join(`,`)

const theme = createMuiTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    terniary: colors.terniary,
    error: colors.error,
    gray: { main: `#AAAEB7`, dark: `#73787e` },
    success: colors.success,
    text: {
      primary: colors.primary.main,
      secondary: colors.secondary.main,
      disabled: colors.grayRgba[7],
      hint: colors.grayRgba[7],
    },
    background: {
      default: colors.gray[0],
    },
    action: {
      active: colors.grayRgba[9],
      hover: colors.grayRgba[3],
      hoverOpacity: 0.08,
      selected: colors.grayRgba[5],
      disabled: colors.grayRgba[6],
      disabledBackground: colors.grayRgba[4],
    },
    grayRgba: colors.grayRgba,
    type: `light`,
  },
  fontSizes,
  fontWeights,
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
    fontSize: fontSizes[1],
    fontFamily: familyRoboto,
    h1: {
      fontSize: fontSizes[3],
      fontWeight: fontWeights[2],
      lineHeight: `4.5rem`,
      fontFamily: familyRobotoSlab,
      letterSpacing: -0.21,
      color: colors.primary.dark,
    },
    h2: {
      fontSize: fontSizes[4],
      fontWeight: fontWeights[1],
      fontFamily: familyRobotoSlab,
      lineHeight: `3.5rem`,
    },
    h3: {
      fontSize: fontSizes[2],
      fontWeight: fontWeights[1],
      lineHeight: `2.5rem`,
      textDecoration: `underline`,
      color: colors.primary.dark,
    },
    h4: {
      fontSize: fontSizes[2],
      fontWeight: fontWeights[1],
      lineHeight: `2.2rem`,
      opacity: 0.8,
      fontFamily: familyRoboto,
    },
    h5: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      lineHeight: `2.0rem`,
      opacity: 0.8,
      fontFamily: familyRoboto,
    },
    h6: {
      fontSize: fontSizes[0],
      fontWeight: fontWeights[1],
      lineHeight: `2.0rem`,
      fontFamily: familyRoboto,
      letterSpacing: 0,
    },
    body1: {
      fontSize: `1.4rem`,
      fontWeight: fontWeights[1],
      lineHeight: `3.0rem`,
      fontFamily: familyRoboto,
    },
    body2: {
      fontSize: fontSizes[3],
      fontWeight: fontWeights[1],
      lineHeight: `2.5rem`,
      color: colors.primary.dark,
      opacity: 0.8,
      fontFamily: familyRoboto,
    },
    subtitle1: {
      fontSize: fontSizes[2],
      fontWeight: fontWeights[1],
      lineHeight: `3rem`,
      color: colors.secondary.main,
      fontFamily: familyRoboto,
    },
    subtitle2: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      lineHeight: `2.5rem`,
      color: colors.primary.dark,
      opacity: 0.8,
      fontFamily: familyRoboto,
    },
    caption: {
      fontSize: fontSizes[1],
      fontWeight: fontWeights[1],
      lineHeight: `1.8rem`,
      fontFamily: familyRoboto,
      color: colors.primary.main,
      cursor: `pointer`,
      '&:hover': {
        color: colors.primary.dark,
        textDecoration: `underline`,
      },
    },
  },
})
theme.mixins = {
  ...theme.mixins,
  toolbar: {
    minHeight: 49,
  },
}
theme.overrides = {
  MuiButton: {
    root: {
      color: `white`,
      backgroundColor: theme.palette.secondary.main,
      minWidth: 50,
      minHeight: 50,
      borderRadius: `4px`,
      textTransform: `none`,
      fontWeight: fontWeights[3],
      fontSize: `16px`,
      letterSpacing: `0.6px`,
      '&:hover': {
        textDecoration: `underline`,
        backgroundColor: `${theme.palette.secondary.main}`,
        color: `white`,
        '&:disabled': {
          textDecoration: `none`,
          backgroundColor: theme.palette.gray.main,
        },
      },
      '&:disabled': {
        cursor: `not-allowed`,
        pointerEvents: `auto`,
        color: `white`,
        opacity: 0.5,
        backgroundColor: theme.palette.gray.main,
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
        backgroundColor: `${theme.palette.secondary.main}`,
        color: `white`,
        '&:disabled': {
          textDecoration: `none`,
          backgroundColor: theme.palette.gray.main,
        },
      },
    },
    disabled: {
      opacity: 0.5,
    },
  },
  MuiTabs: {
    root: {
      background: colors.grayRgba[1],
      [theme.breakpoints.up(`md`)]: {
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 5,
      },
    },
    scrollable: {
      overflowY: `hidden`,
      [theme.breakpoints.up(`md`)]: {
        justifyContent: `space-around`,
      },
    },
    indicator: {
      background: colors.grayRgba[2],
    },
    flexContainer: {},
  },
  MuiTab: {
    root: {
      borderBottom: `2px solid ${colors.secondary.light}`,
    },
    wrapper: {
      flexDirection: `row`,
      '& img': {
        paddingRight: 5,
      },
    },
    labelIcon: {
      minHeight: 60,
      paddingLeft: 5,
      borderBottom: `2px solid ${colors.secondary.light}`,
      color: `${colors.secondary.main} !important`,
      [theme.breakpoints.up(`md`)]: {
        paddingRight: 45,
        paddingLeft: 45,
        flex: 1,
        maxWidth: `none`,
      },
    },
    selected: {
      background: `white`,
      borderTop: `2px solid ${colors.secondary.light}`,
      borderLeft: `2px solid ${colors.secondary.light}`,
      borderRight: `2px solid ${colors.secondary.light}`,
      borderBottom: `2px solid white`,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    },
  },
  MuiTableCell: {
    root: {
      border: `1px solid ${colors.grayRgba[0]}`,
    },
    head: {
      fontSize: 18,
      letterSpacing: 0,
      fontWeight: fontWeights[3],
      color: colors.secondary.main,
    },
    body: {
      fontSize: fontSizes[1],
      borderRight: `1px solid ${colors.grayRgba[0]}`,
    },
  },
  MuiExpansionPanel: {
    root: {
      '&:before': {
        height: `0px`,
      },
    },
  },
  MuiPaper: {
    elevation1: {
      boxShadow: `initial`,
    },
  },
  MuiExpansionPanelDetails: {
    root: {
      backgroundColor: `white`,
    },
  },
  MuiStepper: {
    root: {
      width: `100%`,
      backgroundColor: `transparent`,
      padding: theme.spacing(3, 0),
    },
  },
  MuiStepLabel: {
    disabled: {
      opacity: 0.5,
    },
    label: {
      fontSize: fontSizes[0],
      lineHeight: `${fontSizes[1]}px`,
      marginBottom: theme.spacing(0),
      marginTop: `${theme.spacing(0)}px !important`,
      color: `${colors.primary.dark}px !important`,
    },
  },
  MuiStepIcon: {
    root: {
      color: `${colors.terniary.dark}`,
      borderRadius: `50%`,
      width: `49px`,
      height: `49px`,
    },
    active: {
      color: `${colors.terniary.dark} !important`,
      border: `2px solid ${colors.secondary.main}`,
    },
    text: {
      fill: colors.secondary.main,
      fontFamily: familyRobotoSlab,
      fontWeight: fontWeights[2],
      transform: `translateY(1px)`,
    },
  },
  MuiStepConnector: {
    line: {
      borderColor: colors.secondary.main,
    },
    alternativeLabel: {
      color: `red`,
      top: `25px`,
      left: `calc(-50% + 25px)`,
      right: `calc(50% + 25px)`,
    },
  },
  MuiTypography: {
    gutterBottom: {
      marginBottom: `0.5em`,
    },
  },
  MuiDivider: {
    light: {
      backgroundColor: colors.gray[2],
      opacity: `0.8`,
    },
  },
  MuiCircularProgress: {
    colorPrimary: {
      color: theme.palette.primary.main,
    },
  },
  MuiTextField: {
    root: {
      border: `none`,
      minHeight: inputHeight,
      height: `auto`,
      width: `100%`,
      marginBottom: `0px`,
    },
  },
  MuiInputBase: {
    input: {
      height: inputHeight,
      padding: theme.spacing(0, 0, 0, 2.75),
      '&:disabled': { opacity: `initial` },
    },
    inputAdornedStart: {
      //padding: `17px 2px`,
    },
    adornedStart: {
      paddingLeft: theme.spacing(2.75),
    },
    adornedEnd: {
      paddingRight: theme.spacing(2),
    },
    multiline: {
      padding: `17px 22px`,
    },
    inputMultiline: {
      padding: `0px 22px`,
    },
  },

  MuiOutlinedInput: {
    root: {
      background: colors.primary.light,
      border: `1.2px solid ${colors.primary.light}`,
      borderRadius: 4,
      fontSize: fontSizes[1],
      width: `100%`,
      paddingLeft: 3,
    },
    notchedOutline: {
      borderColor: `transparent !important`,
      borderWidth: `1px !important`,
    },
    input: {
      height: inputHeight,
      padding: theme.spacing(0, 0, 0, 2.75),
      '&:disabled': { opacity: `initial` },
      background: colors.primary.light,
      textOverflow: `ellipsis`,
      '&:focus': {
        background: colors.terniary.light,
      },
    },
    focused: {
      border: `1.2px solid ${colors.terniary.main}`,
      background: colors.terniary.light,
      borderRadius: `4px`,
    },
  },
  MuiSelect: {
    select: {
      display: `flex`,
      alignItems: `center`,
    },
    selectMenu: {
      height: inputHeight,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
  },
  MuiFilledInput: {
    root: {
      width: `100%`,
    },
    underline: {
      '&:hover': {
        '&:before': {
          borderBottom: `none`,
        },
        '&:after': {
          borderBottom: `none`,
        },
      },
      '&:before': {
        borderBottom: `none`,
      },
      '&:after': {
        borderBottom: `none`,
      },
    },
  },
  MuiInput: {
    root: {
      background: colors.primary.light,
      border: `1.2px solid ${colors.primary.light}`,
      borderRadius: 4,
      fontSize: fontSizes[1],
      width: `100%`,
      paddingLeft: 3,
    },
    input: {
      background: colors.primary.light,
      textOverflow: `ellipsis`,
      '&:focus': {
        background: colors.terniary.light,
      },
    },
    focused: {
      border: `1.2px solid ${colors.terniary.main}`,
      background: colors.terniary.light,
      borderRadius: `4px`,
    },
    underline: {
      '&:before': {
        content: ``,
      },
      '&:after': {
        content: ``,
      },
    },
    error: {
      border: `1.2px solid ${colors.error.main}`,
    },
  },
  MuiMenuItem: {
    root: {
      fontSize: fontSizes[1],
      lineHeight: `2rem`,
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: `32px`,
      display: `flex`,
      justifyContent: `center`,
      marginRight: `.8rem`,
    },
  },
  MuiListItem: {
    selected: {
      backgroundColor: `${colors.terniary.light} !important`,
      '&:hover': {
        backgroundColor: `${colors.terniary.main} !important`,
      },
    },
    root: {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: theme.spacing(1),
    },
    button: {
      '&:hover': {
        backgroundColor: colors.terniary.light,
      },
    },
  },
  MuiLinearProgress: {
    root: {
      borderRadius: `5px`,
    },
  },
  MuiRadio: {
    root: {
      paddingTop: 2,
      paddingBottom: 2,
    },
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: `0`,
    },
  },
  MuiFormLabel: {
    root: {
      fontSize: `${fontSizes[1]}px !important`,
      color: theme.palette.primary.main,
    },
  },
  MuiFormControlLabel: {
    root: {
      fontSize: `${fontSizes[1]}px !important`,
    },
    label: {
      lineHeight: 0,
    },
  },
  MuiAutocomplete: {
    root: { border: `none`, backgroundColor: `initial` },
    inputRoot: {
      height: inputHeight,
      paddingLeft: `22px`,
    },
    input: {
      padding: `0px !important`,
      height: `28px`,
    },
    popupIndicator: {
      marginRight: `10px`,
    },
    popupIndicatorOpen: {
      transform: `rotate(0deg) !important`,
    },
  },
  MuiToolbar: {
    regular: {
      minHeight: `9rem`,
    },
    gutters: {
      [theme.breakpoints.down(`md`)]: {
        paddingLeft: `0px`,
        paddingRight: `0px`,
      },
    },
  },
  MuiAppBar: {
    colorDefault: {
      backgroundColor: `white`,
    },
    colorPrimary: {
      color: `white`,
      backgroundColor: colors.secondary.light,
    },
  },
  PrivateSwitchBase: {
    root: {
      padding: `5px`,
      marginRight: `4px`,
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
