import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
import { useStyles } from '../styles/useModalWrapperStyles'

//TODO: GENERAR MODAL POR TYPES: success, info, error,, default
function ModalWrapper({
	title,
	subTitle = ``,
	onClose,
	onAccept,
	maxWidth = `600px`,
	onAcceptText = `Aceptar`,
	onCancelText = `Cancelar`,
	withButtons = true,
	children,
	alignItems = `center`,
	loading = false,
	withClose = true,
	buttonsOrientation = 'vertical',
}) {
	const classes = useStyles()
	return (
		<Modal open={true} disableBackdropClick disableEscapeKeyDown>
			<Paper className={classes.paper} style={{ maxWidth }}>
				{loading ? (
					<Loader height="100%" />
				) : (
					<Grid container direction="column" className={classes.content}>
						<Grid
							item
							className={classes.sections}
							container
							direction="column"
							alignItems={alignItems}
						>
							{title && (
								<Typography variant="h3" className={classes.modalTitle}>
									{title}
								</Typography>
							)}
							{subTitle && (
								<Typography className={classes.modalSubtitle}>
									{subTitle}
								</Typography>
							)}
						</Grid>
						{withClose && (
							<Grid className={classes.icon}>
								<FontAwesomeIcon icon={faTimes} onClick={onClose} />
							</Grid>
						)}
						<Grid container>
							<React.Fragment>
								<Grid container className={classes.modalContent}>
									{children}
								</Grid>
								{withButtons && (
									<Grid
										container
										direction={
											buttonsOrientation === 'vertical'
												? 'column'
												: 'row-reverse'
										}
										justify="center"
										alignItems="center"
										className={classes.buttonWrapper}
									>
										<Button color="primary" onClick={onAccept}>
											{onAcceptText}
										</Button>
										{onCancelText && (
											<Button
												variant="text"
												onClick={onClose}
												className={
													buttonsOrientation === 'horizontal' ? classes.mr : ''
												}
											>
												{onCancelText}
											</Button>
										)}
									</Grid>
								)}
							</React.Fragment>
						</Grid>
					</Grid>
				)}
			</Paper>
		</Modal>
	)
}

export default ModalWrapper
