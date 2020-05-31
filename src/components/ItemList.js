import React from 'react'
import Button from './Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { CheckBox } from './fieldsForm'

const useStyles = makeStyles(
  ({ spacing, palette, fontSizes, fontWeights }) => ({
    itemWrapper: {
      '&:last-child': {
        border: `1px solid #bfc5d26b`,
      },
      border: `1px solid #bfc5d26b`,
      borderBottom: 'none',
      padding: spacing(1, 1.5, 1, 1),
    },
    buttonEdit: {
      fontSize: fontSizes[0],
      fontWeight: fontWeights[3],
    },
  }),
)

function ItemList({ id, name, onChange, checkedId, openUpsert }) {
  const classes = useStyles()
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.itemWrapper}
    >
      <Grid item md={10} container alignItems="center">
        <CheckBox
          name={`${name}-${id}`}
          onChange={() => onChange(id)}
          value={checkedId === id}
        />
        <Typography variant="subtitle1">{name}</Typography>
      </Grid>
      <Grid item md={2} container justify="flex-end">
        <Button
          variant="text"
          color="primary"
          className={classes.buttonEdit}
          onClick={() => openUpsert(id)}
        >
          Editar
        </Button>
      </Grid>
    </Grid>
  )
}

export default ItemList
