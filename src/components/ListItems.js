import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(({ palette, spacing, fontSizes }) => ({
	wrapperItem: {
		'&:last-child': {
			marginBottom: spacing(2),
		},
		padding: spacing(1, 3),
		backgroundColor: '#f4f7ff',
	},
	icon: {
		color: palette.secondary.light,
		fontSize: fontSizes[2],
		cursor: 'pointer',
	},
	text: {
		color: palette.primary.main,
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		width: '90%',
		fontSize: fontSizes[1],
	},
}))

function ListItems({ items = [], removeItem = null }) {
	const classes = useStyles()
	return (
		<Grid container>
			{items.map(({ id, nombre, ...rest }, i) => (
				<Grid
					key={i}
					className={classes.wrapperItem}
					container
					item
					justify="space-between"
					alignItems="center"
				>
					<Tooltip title={nombre}>
						<Typography className={classes.text}>{nombre}</Typography>
					</Tooltip>
					<FontAwesomeIcon
						icon={faTimes}
						className={classes.icon}
						onClick={() => removeItem({ id, nombre, ...rest })}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default ListItems
