import React from "react";

import { Button, Alert as MuiAlert, Typography } from "@mui/material";

const Alert = () => {
 return (
  <MuiAlert variant="outlined" severity="warning">
   <Typography variant="h4">You are about to log out</Typography>
   <Button variant="outlined" color="warning" onClick={() => {}}>
    Log out
   </Button>
   <Button variant="contained" color="info" onClick={() => {}}>
    Cancel
   </Button>
  </MuiAlert>
 );
};

export default Alert;
