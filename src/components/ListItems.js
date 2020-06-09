import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'

const useStyles = makeStyles(({ palette, spacing }) => ({
	wrapperItem: {
		'&:last-child': {
			border: `1px solid #bfc5d26b`,
		},
		border: `1px solid #bfc5d26b`,
		borderBottom: 'none',
		padding: spacing(1, 3),
	},
}))

function ListItems({ items = [], removeItem = null }) {
	const classes = useStyles()
	return (
		<Grid container>
			{items.map(({ id, nombre }, i) => (
				<Grid
					key={i}
					className={classes.wrapperItem}
					container
					item
					justify="space-between"
					alignItems="center"
				>
					<Typography>{nombre}</Typography>
					<Button color="error" variant="text" onClick={() => removeItem(id)}>
						Eliminar
					</Button>
				</Grid>
			))}
		</Grid>
	)
}

export default ListItems
