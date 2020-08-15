import React from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function SnackBar({
	type = '',
	message = 'This is a error message!',
	open = false,
	horizontal = 'right',
	vertical = 'top',
	setOpen = () => null,
}) {
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}
	return open ? (
		<MuiSnackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ horizontal, vertical }}
		>
			<Alert onClose={handleClose} severity={type}>
				{message}
			</Alert>
		</MuiSnackbar>
	) : null
}
