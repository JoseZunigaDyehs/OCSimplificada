import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ spacing, breakpoints }) => ({
	title: {
		marginBottom: spacing(1),
	},
	wrapper: {
		marginRight: spacing(4),
		marginBottom: spacing(1),
		[breakpoints.down(`sm`)]: {
			marginRight: spacing(0),
			marginBottom: spacing(3),
		},
	},
	button: {
		marginTop: spacing(1),
	},
	wrapperDirection: {
		margin: spacing(3, 0, 3, 0),
	},
	root: { flexGrow: 1 },
	wrapperPlan: {
		marginBottom: spacing(6),
	},
}))
