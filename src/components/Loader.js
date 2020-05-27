import React from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing, palette }) => ({
  loading: {
    padding: spacing(5),
    background: `white`,
  },
  icon: {
    color: palette.primary.main,
  },
}))

function Loader({ height = `100vh` }) {
  const classes = useStyles()
  return (
    <Grid
      className={classes.loading}
      item
      container
      xs={12}
      justify="center"
      alignItems="center"
      style={{ height }}
    >
      <CircularProgress className={classes.icon} />
    </Grid>
  )
}

export default Loader
