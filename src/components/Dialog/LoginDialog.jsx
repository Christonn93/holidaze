// Importing React
import React from "react";

// Importing MUI
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";

// Importing components
import LogIn from "../../feature/Login/LogIn";

const LoginDialog = ({ state, setState }) => {
 const handleClickOpen = () => {
  setState(true);
 };

 const handleClose = () => {
  setState(false);
 };

 return (
  <div>
   <Button variant="outlined" onClick={handleClickOpen}>
    Log in
   </Button>
   <Dialog open={state} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{"Log in"}</DialogTitle>
    <DialogContent>
     <LogIn />
    </DialogContent>
   </Dialog>
  </div>
 );
};

export default LoginDialog;
