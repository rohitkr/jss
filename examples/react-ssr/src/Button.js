import React from 'react'
import injectSheet from '@secure-jss/react-jss'

const styles = {
  button: {
    color: 'green'
  }
}

function Button({classes}) {
  return (
    <button type="button" className={classes.button}>
      My Button
    </button>
  )
}

export default injectSheet(styles)(Button)
