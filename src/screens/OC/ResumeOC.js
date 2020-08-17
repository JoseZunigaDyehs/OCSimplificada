import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Divider } from 'components'
import { makeStyles } from '@material-ui/core/styles'
import { useOrden } from 'context'
import { formatThousand } from 'utils'

const useStyles = makeStyles(
	({ spacing, fontSizes, shadows, fontWeights, palette }) => ({
		wrapperResume: {
			backgroundColor: palette.terniary.main,
			padding: spacing(4, 3),
			borderRadius: 6,
			boxShadow: shadows[1],
		},
		mb3: {
			marginBottom: spacing(3),
		},
		mb2: {
			marginBottom: spacing(2),
		},
		mb1: {
			marginBottom: spacing(1),
		},
		titleResume: {
			fontWeight: fontWeights[3],
			color: palette.secondary.light,
			letterSpacing: 1.5,
		},
		fwLight: {
			marginTop: spacing(1),
			fontWeight: fontWeights[1],
		},
		titleBold: {
			fontWeight: fontWeights[3],
		},
		titleInput: {
			fontSize: fontSizes[1],
			fontWeight: fontWeights[3],
		},
	})
)

function ResumeOC() {
	const classes = useStyles()
	const {
		orden: {
			resumeOC: { impuestos, neto, razonSocialProveedor, rut, total },
		},
	} = useOrden()
	return (
		<Grid className={classes.wrapperResume} container direction="column">
			<Typography
				variant="caption"
				className={`${classes.titleResume} ${classes.mb3}`}
			>
				RESUMEN DE TU ORDEN DE COMPRA
			</Typography>
			<Typography>{razonSocialProveedor}</Typography>
			<Typography className={classes.mb2}>RUT: {rut}</Typography>
			<Grid item xs={12}>
				<Divider />
			</Grid>
			<Grid container justify="space-between">
				<Typography
					variant="caption"
					className={`${classes.titleResume} ${classes.fwLight} ${classes.mb1}`}
				>
					Monto neto
				</Typography>
				<Typography
					variant="caption"
					className={`${classes.titleResume} ${classes.fwLight} ${classes.mb1}`}
				>
					${formatThousand(neto)}
				</Typography>
			</Grid>
			<Grid container justify="space-between">
				<Typography
					variant="caption"
					className={`${classes.titleResume} ${classes.mb1}`}
				>
					Impuestos
				</Typography>
				<Typography variant="caption" className={classes.titleResume}>
					${formatThousand(impuestos)}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.mb1}>
				<Divider />
			</Grid>
			<Grid container>
				<Grid item md={6}>
					<Typography className={classes.titleInput}>
						Monto total a pagar:
					</Typography>
				</Grid>
				<Grid item md={6} container justify="flex-end">
					<Typography variant="h4" className={classes.titleBold}>
						${formatThousand(total)}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ResumeOC
