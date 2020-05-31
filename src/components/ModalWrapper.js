import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Button from './Button'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

//TODO: GENERAR MODAL POR TYPES: success, info, error,, default
const useStyles = makeStyles(
  ({ spacing, palette, breakpoints, shadows, fontSizes }) => ({
    paper: {
      position: `absolute`,
      maxWidth: `600px`,
      width: `100%`,
      overflowX: `hidden`,
      maxHeight: `100vh`,
      backgroundColor: `white`,
      boxShadow: shadows[5],
      padding: spacing(3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [breakpoints.down(`sm`)]: {
        width: `100%`,
      },
    },
    icon: {
      position: `absolute`,
      right: spacing(1),
      top: spacing(1),
      width: spacing(3),
      height: spacing(3),
      fontSize: spacing(3),
      color: palette.terniary.dark,
      '&:hover': {
        cursor: `pointer`,
      },
    },
    modalTitle: {
      paddingTop: spacing(4),
      [breakpoints.down(`sm`)]: {
        fontSize: fontSizes[3],
        padding: 2,
        width: `90%`,
      },
    },
    buttonWrapper: {
      [breakpoints.down(`sm`)]: {
        paddingRight: `1em`,
        width: `100%`,
      },
    },
    modalContent: {
      padding: spacing(3, 0, 4, 0),
    },
    modalSubtitle: {
      color: palette.primary.main,
      fontSize: fontSizes[2],
    },
  }),
)
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
}) {
  const classes = useStyles()
  return (
    <Modal open={true} disableBackdropClick disableEscapeKeyDown>
      <Paper className={classes.paper} style={{ maxWidth }}>
        {loading ? (
          <Loader height="100%" />
        ) : (
          <Grid container direction="column">
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
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.buttonWrapper}
                  >
                    <Button color="primary" onClick={onAccept}>
                      {onAcceptText}
                    </Button>
                    {onCancelText && (
                      <Button variant="text" onClick={onClose}>
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
