import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableMui from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
})
function Table({ dataSource = [], columns = [] }) {
	const classes = useStyles()

	return (
		<TableContainer component={Paper}>
			<TableMui className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map(({ align = 'left', title, index }) => (
							<TableCell key={index} align={align}>
								{title}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{dataSource.map((row, i) => (
						<TableRow key={i}>
							{columns.map(({ index }, j) => (
								<TableCell key={`${j * i}-${index}`} component="th" scope="row">
									{row[index]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableMui>
		</TableContainer>
	)
}

export default Table
