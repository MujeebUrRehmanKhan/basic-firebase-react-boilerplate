import React from 'react'
import { Alert } from '@material-ui/lab';

const AlertComponent = (props) => {
  return (
    <Alert severity={`${props.isError ? "error" : "success"}`}
      sx={{ mb: 2 }}
    >
      {props.message}


    </Alert>
  )
}

export default AlertComponent