import React from "react";

import { Button, Alert as MuiAlert, Typography } from "@mui/material";

const Alert = ({ severity, variant, title, text, buttons, btn1Text, btn2Text }) => {
 return (
  <MuiAlert variant={variant} severity={severity}>
   <Typography variant="h4">{title}</Typography>
   <Typography variant="body1">{text}</Typography>
   {buttons ? (
    <>
     <Button variant="outlined" color="warning" onClick={() => {}}>
      {btn1Text}
     </Button>
     <Button variant="contained" color="info" onClick={() => {}}>
      {btn2Text}
     </Button>
    </>
   ) : (
    <></>
   )}
  </MuiAlert>
 );
};

export default Alert;
