import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
	({ spacing, palette, breakpoints, shadows, fontSizes }) => ({
		paper: {
			position: `absolute`,
			maxWidth: `600px`,
			width: `100%`,
			overflowX: `hidden`,
			maxHeight: `100vh`,
			backgroundColor: `white`,
			boxShadow: shadows[5],
			top: `50%`,
			left: `50%`,
			transform: `translate(-50%, -50%)`,
			[breakpoints.down(`sm`)]: {
				width: `100%`,
				maxWidth: 'auto',
			},
		},
		icon: {
			position: `absolute`,
			right: spacing(1),
			top: spacing(1),
			width: spacing(3),
			height: spacing(3),
			fontSize: spacing(3),
			color: palette.terniary.dark,
			'&:hover': {
				cursor: `pointer`,
			},
		},
		modalTitle: {
			paddingTop: spacing(4),
			paddingBottom: spacing(2),
			[breakpoints.down(`sm`)]: {
				padding: 2,
				width: `100%`,
			},
		},
		buttonWrapper: {
			[breakpoints.down(`sm`)]: {
				paddingRight: `1em`,
				width: `100%`,
			},
		},
		modalContent: {
			padding: spacing(3, 0, 4, 0),
		},
		modalSubtitle: {
			color: palette.primary.main,
			fontSize: fontSizes[2],
		},
		content: {
			padding: spacing(3),
		},
		mr: {
			marginRight: spacing(3),
		},
	})
)
