import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
	({ spacing, fontSizes, breakpoints, fontWeights, palette }) => ({
		title: {
			marginBottom: spacing(2),
			fontSize: fontSizes[4],
		},
		titleInput: {
			fontSize: fontSizes[1],
			fontWeight: fontWeights[3],
		},
		wrapperInputs: {
			marginRight: spacing(4),
			[breakpoints.down(`sm`)]: {
				marginRight: spacing(0),
				marginBottom: spacing(3),
			},
		},
		plazoEntrega: {
			margin: spacing(4, 0, 0, 0),
		},
		root: {
			flexGrow: 1,
		},
		mt: {
			marginTop: spacing(3),
		},
		mb: {
			marginBottom: spacing(1),
		},
		optional: {
			marginTop: spacing(1),
		},
		icon: {
			fontSize: fontSizes[4],
			color: palette.primary.main,
			marginLeft: spacing(1),
		},
		pointer: {
			cursor: 'pointer',
		},
		link: {
			textDecoration: 'underline',
			cursor: 'pointer',
			marginLeft: spacing(1),
		},
		wrapperResume: {
			backgroundColor: palette.terniary.main,
			padding: spacing(2),
		},
		mb3: {
			marginBottom: spacing(3),
		},
		titleResume: {
			fontWeight: fontWeights[3],
			color: palette.secondary.light,
			letterSpacing: 0.7,
		},
		fwLight: {
			fontWeight: fontWeights[1],
		},
		wrapperOptional: {
			padding: spacing(1, 0),
		},
	})
)
