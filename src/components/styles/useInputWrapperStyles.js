import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
	({ spacing, fontSizes, palette, fontWeights, breakpoints }) => ({
		label: {
			paddingBottom: spacing(1),
			textTransform: 'uppercase',
			fontSize: fontSizes[0],
			color: palette.secondary.light,
			fontWeight: fontWeights[2],
			letterSpacing: '.5px',
		},
		labelRadio: {
			color: '#000',
			fontWeight: fontWeights[3],
			textTransform: 'initial',
			fontSize: fontSizes[1],
			paddingBottom: 0,
		},
		invalidText: {
			fontSize: fontSizes[0],
		},
		inputWrapper: {
			border: `1px solid`,
			borderRadius: '5px',
			width: '100%',
		},
		noBorder: {
			borderColor: 'transparent',
		},
		default: {
			borderColor: palette.secondary.light,
		},
		error: {
			borderColor: palette.error.main,
		},
		success: {
			borderColor: palette.success.main,
		},
		focused: {
			borderColor: palette.primary.main,
		},
		wrapper: {
			flexBasis: 'auto',
			position: 'relative',
			paddingBottom: '0 !important',
		},
		bottomWrapper: {
			position: 'absolute',
			bottom: '-20px',
		},
		//PADDING POSITION
		left: {
			paddingLeft: spacing(2),
			[breakpoints.down('sm')]: {
				paddingLeft: 0,
			},
		},
		right: {
			paddingRight: spacing(2),
			[breakpoints.down('sm')]: {
				paddingRight: 0,
			},
		},
	})
)
