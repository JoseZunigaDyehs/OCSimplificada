import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableMui from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { TextInput } from './fieldsForm'
import useForm from 'hooks/useForm'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(({ spacing }) => ({
	table: {
		minWidth: 650,
	},
	wrapper: {
		padding: spacing(2),
	},
}))
function Table({ dataSource = [], columns = [] }) {
	const classes = useStyles()
	const [dataFiltered, setDataFiltered] = useState(dataSource)
	const { fieldsById, onFocusHandle, onChangefield } = useForm({
		defaultFieldsById: {
			search: {
				name: 'search',
				label: 'Buscar',
				required: false,
				isValid: true,
				status: 'default',
				type: 'text',
				value: '',
				rule: { type: 'range', min: 0, max: 50 },
				md: 12,
			},
		},
	})
	useEffect(() => {
		//Filtrar data y setear
		const getFilteredData = search => {
			if (search.trim() === '') {
				return setDataFiltered(dataSource)
			}
			const nextData = dataSource.filter(row => {
				const indexes = Object.keys(row)
				let isInSearch = false
				indexes.forEach(index => {
					const include = row[index]
						.toString()
						.toLowerCase()
						.includes(search.toLowerCase())
					if (include) {
						isInSearch = true
					}
				})
				return isInSearch
			})
			setDataFiltered(nextData)
		}
		getFilteredData(fieldsById.search.value)
	}, [fieldsById.search.value])
	useEffect(() => {
		setDataFiltered(dataSource)
	}, [dataSource])
	return (
		<Grid>
			<TextInput
				onFocusHandle={onFocusHandle}
				onChange={onChangefield}
				{...fieldsById.search}
			/>
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
						{dataFiltered.length === 0 && (
							<Grid className={classes.wrapper}>
								<Typography>No existen datos</Typography>
							</Grid>
						)}
						{dataFiltered.map((row, i) => (
							<TableRow key={i}>
								{columns.map(({ index, align = 'left', render = null }, j) => (
									<TableCell
										key={`${j * i}-${index}`}
										component="th"
										scope="row"
										align={align}
									>
										{render ? render(row) : row[index]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</TableMui>
			</TableContainer>
		</Grid>
	)
}

export default Table
