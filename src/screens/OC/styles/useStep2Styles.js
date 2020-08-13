import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(
	({ spacing, breakpoints, palette, fontWeights }) => ({
		root: {
			flexGrow: 1,
		},
		title: {
			marginBottom: spacing(1),
			marginTop: spacing(3),
		},
		titleInput: {
			fontWeight: fontWeights[3],
			color: '#000',
		},
		wrapper: {
			[breakpoints.down(`sm`)]: {
				marginRight: spacing(0),
				marginBottom: spacing(3),
			},
		},
		button: {
			color: palette.primary.main,
			cursor: 'pointer',
			marginLeft: spacing(1),
		},
		wrapperDirection: {
			flexGrow: 1,
			padding: spacing(1.5, 0, 0, 0),
			marginBottom: spacing(1),
		},
		mb: {
			marginBottom: spacing(1),
		},
		mt: {
			marginTop: spacing(2),
		},
		mt3: {
			marginTop: spacing(3),
		},
		noPaddingY: {
			paddingTop: `${spacing(0)} !important`,
			paddingBottom: `0 !important`,
		},
		wrapperMayor30: {
			paddingTop: spacing(2),
		},
	})
)
