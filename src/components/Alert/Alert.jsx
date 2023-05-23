import React from "react";

import { Button, Alert as MuiAlert, Typography } from "@mui/material";

const Alert = ({ severity, variant, title, text, buttons, btn1Text, btn2Text, btnAction1, btnAction2 }) => {
 return (
  <MuiAlert variant={variant} severity={severity}>
   <Typography variant="h4">{title}</Typography>
   <Typography variant="body1">{text}</Typography>
   {buttons ? (
    <>
     <Button variant="outlined" color="warning" onClick={btnAction1}>
      {btn1Text}
     </Button>
     <Button variant="contained" color="info" onClick={btnAction2}>
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
